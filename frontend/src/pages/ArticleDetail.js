import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { articlesAPI } from "../services/api";
import { ArrowLeft, Calendar } from "lucide-react";
import { parseDate } from "../utils/dates";
import "../styles/portfolio.css";

const ArticleDetail = () => {
  const { id } = useParams();
  const { lang, t } = useLanguage();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await articlesAPI.getById(id);
        setArticle(data || null);
      } catch (err) {
        console.error("Error fetching article:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) {
    return (
      <div style={{ paddingTop: "120px", textAlign: "center", minHeight: "100vh" }}>
        <div className="container">
          <p className="body-text">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div style={{ paddingTop: "120px", textAlign: "center" }}>
        <div className="container">
          <p className="body-text">
            {t({ it: "Articolo non trovato", en: "Article not found" })}
          </p>
          <Link to="/articles" className="btn btn-outline" style={{ marginTop: "var(--spacing-lg)" }}>
            <ArrowLeft size={16} />
            {t({ it: "Torna al blog", en: "Back to blog" })}
          </Link>
        </div>
      </div>
    );
  }

  // Data lunga in formato europeo (mese in lettere)
  const locale = lang === "it" ? "it-IT" : "en-GB";
  const ts = parseDate(article.date);
  const prettyDate = new Date(ts).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const fallbackImg = "/media/placeholder.jpg";
  const title = t(article.title);
  const excerpt = t(article.excerpt);
  const content = t(article.content) || "";

  return (
    <div style={{ paddingTop: "100px" }}>
      <section className="section-spacing">
        <div className="container">
          <Link to="/articles" className="btn btn-outline" style={{ marginBottom: "var(--spacing-xl)" }}>
            <ArrowLeft size={16} />
            {t({ it: "Torna al blog", en: "Back to blog" })}
          </Link>

          <article style={{ maxWidth: 800, margin: "0 auto" }}>
            {/* Meta + Titolo */}
            <div style={{ marginBottom: "var(--spacing-2xl)" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--spacing-xs)",
                  marginBottom: "var(--spacing-md)",
                }}
              >
                <Calendar size={16} style={{ color: "var(--color-gray-500)" }} />
                <span className="small-text">{prettyDate}</span>
              </div>

              <h1 className="section-title" style={{ marginBottom: "var(--spacing-xl)" }}>
                {title}
              </h1>

              {excerpt && (
                <p className="body-text" style={{ fontSize: "1.25rem", color: "var(--color-gray-600)" }}>
                  {excerpt}
                </p>
              )}
            </div>

            {/* Immagine principale */}
            {article.image && (
              <div style={{ marginBottom: "var(--spacing-2xl)" }}>
                <img
                  src={article.image}
                  alt={title || "Article image"}
                  style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover" }}
                  onError={(e) => {
                    e.currentTarget.src = fallbackImg;
                  }}
                />
              </div>
            )}

            {/* Contenuto */}
            <div style={{ paddingTop: "var(--spacing-xl)", borderTop: "1px solid var(--color-gray-200)" }}>
              <div className="body-text" style={{ fontSize: "1.125rem", lineHeight: 1.8 }}>
                {content.split("\n").map((paragraph, i) => (
                  <p key={i} style={{ marginBottom: "var(--spacing-lg)" }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Autore */}
            <div
              style={{
                marginTop: "var(--spacing-3xl)",
                paddingTop: "var(--spacing-2xl)",
                borderTop: "1px solid var(--color-gray-200)",
              }}
            >
              <div style={{ display: "flex", gap: "var(--spacing-lg)", alignItems: "center" }}>
                <img
                  src="/media/bio/foto-bio-vert.png"
                  alt="Eva Tazzari"
                  style={{ width: 80, height: 80, borderRadius: "50%", objectFit: "cover" }}
                  onError={(e) => {
                    e.currentTarget.src = fallbackImg;
                  }}
                />
                <div>
                  <h3 className="artwork-title" style={{ marginBottom: "var(--spacing-xs)" }}>
                    Eva Tazzari
                  </h3>
                  <p className="small-text">
                    {t({ it: "Artista e scultrice contemporanea", en: "Contemporary artist and sculptor" })}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;
