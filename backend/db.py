# backend/db.py
USE_DB = False
db = None
client = None

# motor è opzionale: se non c'è, il DB resta OFF
try:
    from motor.motor_asyncio import AsyncIOMotorClient
except Exception:  # noqa
    AsyncIOMotorClient = None

async def init_db(mongo_url: str | None, db_name: str | None):
    """Inizializza il DB se le variabili sono presenti e motor è installato."""
    global USE_DB, db, client
    if mongo_url and db_name and AsyncIOMotorClient:
        client = AsyncIOMotorClient(mongo_url)
        db = client[db_name]
        USE_DB = True
        print("MongoDB connesso.")
    else:
        print("DB non attivo (manca MONGO_URL/DB_NAME o motor).")

def close_db():
    """Chiude il client se aperto."""
    global client
    try:
        if client:
            client.close()
    except:
        pass

def get_db():
    """Accessor usato dalle route; None se DB OFF."""
    return db if USE_DB else None
