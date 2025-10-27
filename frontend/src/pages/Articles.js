import { useEffect, useState } from "react";
import { articlesAPI } from "../services/api";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/mock";
import { Link } from "react-router-dom";

export default function Articles() {
  const { lang, t } = useLanguage();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const list = await articlesAPI.list();
        setArticles(Array.isArray(list) ? list : []);
      } catch (e) {
        console.error("Errore caricamento articoli:", e);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div style={{ padding: 16 }}>Caricamento…</div>;
  if (!articles.length) return <div style={{ padding: 16 }}>Nessun articolo</div>;

  return (
    <div className="container">
      <h1 className="page-title">{t(translations.articles.title)}</h1>

      <div className="grid">
        {articles.map((a) => (
          <article key={a.id} className="card">
            {a.image && (
              <img src={a.image} alt={a.title?.[lang] || a.title?.it || "Article"} />
            )}
            <div className="card-body">
              <h2 className="card-title">{a.title?.[lang] || a.title?.it}</h2>
              {a.date && (
                <div className="muted">
                  {t(translations.articles.published)} {a.date}
                </div>
              )}
              <p className="card-text">{a.excerpt?.[lang] || a.excerpt?.it}</p>
              <Link to={`/articles/${a.id}`} className="btn">Leggi</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
