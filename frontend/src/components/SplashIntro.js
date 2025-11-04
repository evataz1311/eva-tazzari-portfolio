import React, { useEffect, useState, useCallback, useRef } from "react";

export default function SplashIntro({
  image = "/media/intro.jpg",
  storageKey = "splash_seen",
  closeDurationMs = 750, // durata animazione di chiusura (deve combaciare col CSS)
}) {
  const [visible, setVisible] = useState(() => {
    try {
      return !sessionStorage.getItem(storageKey);
    } catch {
      return true;
    }
  });
  const [closing, setClosing] = useState(false);
  const timerRef = useRef(null);

  const reallyClose = useCallback(() => {
    try { sessionStorage.setItem(storageKey, "1"); } catch {}
    setVisible(false);
  }, [storageKey]);

  const startClose = useCallback(() => {
    if (closing || !visible) return;
    setClosing(true);
    // Fallback nel caso onAnimationEnd non scatti
    timerRef.current = setTimeout(reallyClose, closeDurationMs + 50);
  }, [closing, visible, closeDurationMs, reallyClose]);

  // Chiudi su Esc, click o touch
  useEffect(() => {
    if (!visible) return;

    const onKey = (e) => { if (e.key === "Escape") startClose(); };
    const onClick = () => startClose();
    const onTouch = () => startClose();

    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);
    window.addEventListener("touchstart", onTouch);

    // Blocca lo scroll del body mentre lo splash è visibile
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
      window.removeEventListener("touchstart", onTouch);
      document.body.style.overflow = prev;
    };
  }, [visible, startClose]);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  if (!visible) return null;

  return (
    <div
      className={`splash-overlay ${closing ? "closing" : ""}`}
      role="dialog"
      aria-modal="true"
      onAnimationEnd={(e) => {
        // quando finisce l’animazione principale, chiudi davvero
        if (e.animationName === "tv-close") {
          reallyClose();
        }
      }}
    >
      <div className="splash-scroll">
        <img src={image} alt="Intro" className="splash-img" />
      </div>
      <div className="splash-hint">
        <span>Tocca/clicca o premi ESC per entrare</span>
      </div>
    </div>
  );
}
