import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/mock';
import { Globe } from 'lucide-react';

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            EVA TAZZARI
          </Link>

          <nav>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link 
                  to="/" 
                  className="nav-link"
                  style={{ color: isActive('/') ? 'var(--color-black)' : undefined }}
                >
                  {t(translations.nav.home)}
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/works" 
                  className="nav-link"
                  style={{ color: isActive('/works') ? 'var(--color-black)' : undefined }}
                >
                  {t(translations.nav.works)}
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/bio" 
                  className="nav-link"
                  style={{ color: isActive('/bio') ? 'var(--color-black)' : undefined }}
                >
                  {t(translations.nav.bio)}
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/articles" 
                  className="nav-link"
                  style={{ color: isActive('/articles') ? 'var(--color-black)' : undefined }}
                >
                  {t(translations.nav.articles)}
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/contact" 
                  className="nav-link"
                  style={{ color: isActive('/contact') ? 'var(--color-black)' : undefined }}
                >
                  {t(translations.nav.contact)}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="language-switcher" onClick={toggleLanguage}>
            <Globe size={16} />
            <span>{language.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
