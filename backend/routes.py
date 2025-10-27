from fastapi import APIRouter
from pydantic import BaseModel, EmailStr, Field
from db import get_db
import os, smtplib, ssl
from email.message import EmailMessage

router = APIRouter()

class ContactIn(BaseModel):
    name: str = Field(..., min_length=1)
    email: EmailStr
    message: str = Field(..., min_length=1)

def send_mail(subject: str, body: str):
    import os
    import ssl
    import smtplib
    from email.message import EmailMessage

    host = os.getenv("EMAIL_HOST", "127.0.0.1")
    port = int(os.getenv("EMAIL_PORT", "1025"))
    user = os.getenv("EMAIL_USER")
    pwd  = os.getenv("EMAIL_PASS")
    to   = os.getenv("EMAIL_TO")
    cc   = os.getenv("EMAIL_CC", "")

    cc_list = [x.strip() for x in cc.split(",") if x.strip()]
    recipients = ([to] if to else []) + cc_list

    if not (host and port and user and pwd and to):
        raise RuntimeError("Email not configured (host/port/user/pass/to)")

    # Header email
    msg = EmailMessage()
    msg["Subject"] = subject
    msg["From"] = user            # mittente effettivo (Bridge)
    msg["To"] = to
    if cc_list:
        msg["Cc"] = ", ".join(cc_list)
    msg.set_content(body)

    # SSL context: disabilita verifica SOLO su loopback (Bridge locale)
    if host in ("127.0.0.1", "localhost"):
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE
    else:
        ctx = ssl.create_default_context()

    # Proton Bridge: 1025 = SSL implicita; 1026 = STARTTLS
    use_ssl = port in (1025, 465)

    if use_ssl:
        with smtplib.SMTP_SSL(host, port, context=ctx) as s:
            s.login(user, pwd)
            s.sendmail(user, recipients, msg.as_string())
    else:
        with smtplib.SMTP(host, port) as s:
            s.starttls(context=ctx)
            s.login(user, pwd)
            s.sendmail(user, recipients, msg.as_string())



@router.post("/contact")
async def send_contact(payload: ContactIn):
    print("DEBUG /contact payload:", payload.model_dump())

    # (opzionale) salva su DB
    db = get_db()
    if db:
        try:
            await db.messages.insert_one(payload.model_dump())
        except Exception as e:
            print("Warn: salvataggio DB fallito:", e)

    # prepara email
    subject = f"Nuovo messaggio dal sito: {payload.name}"
    body = f"From: {payload.name} <{payload.email}>\n\n{payload.message}"

    # invio email PROTETTO
    try:
        send_mail(subject, body)   # la tua funzione
        print("DEBUG /contact: email inviata")
    except Exception as e:
        print("ERROR /contact: invio email fallito:", repr(e))

    # rispondi SEMPRE qualcosa
    return {"ok": True}
