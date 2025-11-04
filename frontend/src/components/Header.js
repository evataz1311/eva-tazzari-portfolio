import React from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/mock";
import { Globe } from "lucide-react";

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();

  const linkClass = ({ isActive }) =>
    `nav-link${isActive ? " nav-link--active" : ""}`;

  return (
    <header className="header" role="banner">
      <div className="container">
        <div className="header-content">
          <NavLink to="/" className="logo" aria-label="Eva Tazzari — Home">
            EVA TAZZARI
          </NavLink>

          <nav aria-label="Main">
            <ul className="nav-menu">
              <li className="nav-item">
                <NavLink to="/" end className={linkClass}>
                  {t(translations.nav.home)}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/bio" className={linkClass}>
                  {t(translations.nav.bio)}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/works" className={linkClass}>
                  {t(translations.nav.works)}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/articles" className={linkClass}>
                  {t(translations.nav.articles)} {/* reso “BLOG” nelle traduzioni */}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/contact" className={linkClass}>
                  {t(translations.nav.contact)}
                </NavLink>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className="language-switcher"
            onClick={toggleLanguage}
            aria-label="Cambia lingua"
            title="Cambia lingua"
          >
            <Globe size={16} />
            <span>{language.toUpperCase()}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
