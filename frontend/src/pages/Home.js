import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/mock";
import { artworksAPI, articlesAPI } from "../services/api";
import { ArrowRight } from "lucide-react";
import { parseDate, formatDateEU } from "../utils/dates";
import "../styles/portfolio.css";

const Home = () => {
  const { t } = useLanguage();
  const [featuredWorks, setFeaturedWorks] = useState([]);
  const [latestArticle, setLatestArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [allArtworks, allArticles] = await Promise.all([
          artworksAPI.list(),
          articlesAPI.list(),
        ]);

        const works = Array.isArray(allArtworks) ? allArtworks : [];
        const articles = Array.isArray(allArticles) ? allArticles : [];

        // Mostra "featured" come prima
        setFeaturedWorks(works.filter((w) => w.featured));

        // Ultimo articolo in base alla data EU (se non hai flag featured)
        const byDateDesc = [...articles].sort(
          (a, b) => (parseDate(b?.date)?.getTime?.() ?? 0) - (parseDate(a?.date)?.getTime?.() ?? 0)
        );
        setLatestArticle(byDateDesc[0] || null);
      } catch (error) {
        console.error("Error fetching data:", error);
        setFeaturedWorks([]);
        setLatestArticle(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div style={{ paddingTop: "100px", textAlign: "center", minHeight: "100vh" }}>
        <div className="container">
          <p className="body-text">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title" style={{ marginBottom: "var(--spacing-xl)" }}>
              Eva Tazzari
            </h1>
            <p className="hero-statement" style={{ whiteSpace: "pre-line" }}>
              {t(translations.home.hero)}
            </p>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="home-hero-image">
        <div className="container">
          <img
            src="/media/home/home_hero.jpg"
            alt="Eva Tazzari — opera"
            className="home-hero-img"
            onError={(e) => { e.currentTarget.src = "/media/placeholder.jpg"; }}
          />
        </div>
      </section>

      {/* Intro */}
      <section className="section-spacing">
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <p className="body-text">{t(translations.home.intro)}</p>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section
        className="section-spacing"
        style={{ backgroundColor: "var(--color-gray-50)", margin: "0", padding: "var(--spacing-3xl) 0" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-2xl)" }}>
            <h2 className="section-title">{t(translations.home.featured)}</h2>
          </div>

          <div className="grid-3">
            {featuredWorks.map((work, index) => (
              <div
                key={work.id}
                className="artwork-card fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link to={`/works/${work.id}`}>
                  <div className="image-overlay">
                    <img src={work.image} alt={t(work.title)} className="artwork-image" />
                  </div>
                  <div className="artwork-info">
                    <h3 className="artwork-title">{t(work.title)}</h3>
                    <div className="artwork-meta">
                      <span className="small-text">{work.year}</span>
                      <span className="category-badge">
                        {t(translations.works[work.category])}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "var(--spacing-2xl)" }}>
            <Link to="/works" className="btn btn-outline">
              {t(translations.home.allWorks)}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Article */}
      {latestArticle && (
        <section className="section-spacing">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "var(--spacing-2xl)" }}>
              <h2 className="section-title">{t(translations.home.latest)}</h2>
            </div>

            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
              <Link to={`/articles/${latestArticle.id}`} style={{ textDecoration: "none" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "var(--spacing-2xl)",
                    alignItems: "center",
                  }}
                >
                  <div className="image-overlay" style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                    <img
                      src={latestArticle.image}
                      alt={t(latestArticle.title)}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                  </div>
                  <div>
                    <p className="small-text" style={{ marginBottom: "var(--spacing-sm)" }}>
                      {formatDateEU(latestArticle.date)}
                    </p>
                    <h3 className="artwork-title" style={{ marginBottom: "var(--spacing-md)" }}>
                      {t(latestArticle.title)}
                    </h3>
                    <p className="body-text" style={{ marginBottom: "var(--spacing-lg)" }}>
                      {t(latestArticle.excerpt)}
                    </p>
                    <span
                      className="nav-link"
                      style={{ display: "inline-flex", alignItems: "center", gap: "var(--spacing-xs)" }}
                    >
                      {t(translations.home.readMore)}
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        className="section-spacing"
        style={{
          backgroundColor: "var(--color-gray-900)",
          color: "var(--color-white)",
          margin: "0",
          padding: "var(--spacing-3xl) 0",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
            <h2 className="section-title" style={{ color: "var(--color-white)", marginBottom: "var(--spacing-lg)" }}>
              {t({ it: "Esplora il mio lavoro", en: "Explore my work" })}
            </h2>
            <p className="body-text" style={{ color: "var(--color-gray-300)", marginBottom: "var(--spacing-xl)" }}>
              {t({
                it: "Interessato a una visita in studio o a collaborare? Contattami per discutere progetti e opportunità.",
                en: "Interested in a studio visit or collaboration? Contact me to discuss projects and opportunities.",
              })}
            </p>
            <Link to="/contact" className="btn btn-primary">
              {t(translations.home.contactCTA)}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
