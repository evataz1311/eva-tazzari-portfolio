import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/mock";
import "../styles/portfolio.css";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div style={{ paddingTop: "100px" }}>
      <section className="section-spacing">
        <div className="container" style={{ maxWidth: 1000, margin: "0 auto" }}>
          {/* Titolo pagina */}
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-2xl)" }}>
            <h1 className="section-title">{t(translations.contact.title)}</h1>
            {/* Rimossa la pill/descrizione sotto al titolo */}
          </div>

          {/* SOLO blocco info, senza il titolo "Informazioni" e SENZA form */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "var(--spacing-2xl)" }}>
            <div>
              {/* (titolo "Informazioni" rimosso) */}
              <div style={{ display: "grid", gap: "var(--spacing-lg)" }}>
                <div>
                  <div className="small-text" style={{ opacity: 0.7 }}>
                    EMAIL
                  </div>
                  <a
                    className="body-text"
                    href="mailto:info@evatazzari.com"
                    style={{ textDecoration: "none" }}
                  >
                    info@evatazzari.com
                  </a>
                </div>

                <div>
                  <div className="small-text" style={{ opacity: 0.7 }}>
                    STUDIO
                  </div>
                  <div className="body-text">Málaga, Spagna</div>
                </div>

               <div className="body-text" style={{ opacity: 0.9 }}>
                 {t({ it: "Disponibile per collaborazioni.", en: "Available for collaborations." })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
