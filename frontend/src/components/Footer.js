import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/mock";
import { Instagram, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Colonna: info autore */}
          <div className="footer-section">
            <h4>Eva Tazzari</h4>
            <p className="small-text" style={{ marginTop: "var(--spacing-sm)" }}>
              {t({
                it: "Artista e scultrice contemporanea",
                en: "Contemporary artist and sculptor",
              })}
            </p>
          </div>

          {/* Colonna: navigazione */}
          <div className="footer-section">
            <h4>{t({ it: "Naviga", en: "Navigate" })}</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">{t(translations?.nav?.home ?? { it: "Home", en: "Home" })}</Link>
              </li>
              <li>
                <Link to="/works">{t(translations?.nav?.works ?? { it: "Opere", en: "Works" })}</Link>
              </li>
              <li>
                <Link to="/bio">{t(translations?.nav?.bio ?? { it: "Bio", en: "Bio" })}</Link>
              </li>
              <li>
                <Link to="/articles">
                  {t(translations?.nav?.articles ?? { it: "Articoli", en: "Articles" })}
                </Link>
              </li>
              <li>
                <Link to="/contact">{t(translations?.nav?.contact ?? { it: "Contatti", en: "Contact" })}</Link>
              </li>
            </ul>
          </div>

          {/* Colonna: social */}
          <div className="footer-section">
            <h4>{t({ it: "Seguimi", en: "Follow" })}</h4>
            <div
              className="footer-social"
              style={{ display: "flex", gap: "var(--spacing-md)", marginTop: "var(--spacing-sm)" }}
            >
              <a
                href="https://instagram.com/evatazzari"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="footer-social-link"
                style={{ color: "var(--color-gray-600)" }}
              >
                <Instagram size={24} />
              </a>
              <a
                href="mailto:info@evatazzari.com"
                aria-label="Email"
                title="Email"
                className="footer-social-link"
                style={{ color: "var(--color-gray-600)" }}
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Eva Tazzari.{" "}
            {t({ it: "Tutti i diritti riservati.", en: "All rights reserved." })}
          </p>

          {/* Se hai pagine /privacy e /cookies, trasforma questi in <Link> */}
          <p style={{ marginTop: "var(--spacing-xs)" }}>
            <span style={{ opacity: 0.9 }}>
              {t({ it: "Privacy Policy • Cookie Policy", en: "Privacy Policy • Cookie Policy" })}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
