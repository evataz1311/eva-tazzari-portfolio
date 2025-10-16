import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/mock';
import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Eva Tazzari</h4>
            <p className="small-text" style={{ marginTop: 'var(--spacing-sm)' }}>
              {t({ it: 'Artista e scultrice contemporanea', en: 'Contemporary artist and sculptor' })}
            </p>
          </div>

          <div className="footer-section">
            <h4>{t({ it: 'Naviga', en: 'Navigate' })}</h4>
            <ul className="footer-links">
              <li><Link to="/">{t(translations.nav.home)}</Link></li>
              <li><Link to="/works">{t(translations.nav.works)}</Link></li>
              <li><Link to="/bio">{t(translations.nav.bio)}</Link></li>
              <li><Link to="/articles">{t(translations.nav.articles)}</Link></li>
              <li><Link to="/contact">{t(translations.nav.contact)}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t({ it: 'Seguimi', en: 'Follow' })}</h4>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-sm)' }}>
              <a 
                href="https://instagram.com/evatazzari" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'var(--color-gray-600)', transition: 'color 0.3s' }}
                onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-black)'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-gray-600)'}
              >
                <Instagram size={24} />
              </a>
              <a 
                href="mailto:info@evatazzari.com"
                style={{ color: 'var(--color-gray-600)', transition: 'color 0.3s' }}
                onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-black)'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-gray-600)'}
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Eva Tazzari. {t({ it: 'Tutti i diritti riservati.', en: 'All rights reserved.' })}</p>
          <p style={{ marginTop: 'var(--spacing-xs)' }}>
            {t({ it: 'Privacy Policy • Cookie Policy', en: 'Privacy Policy • Cookie Policy' })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
