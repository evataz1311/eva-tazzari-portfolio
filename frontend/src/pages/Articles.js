import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { articlesAPI } from "../services/api";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/mock";
import { parseDate, formatDateEU } from "../utils/dates";

export default function Articles() {
  const { lang, t } = useLanguage();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback testi (teniamo "Blog" anche in EN)
  const TX_TITLE     = translations?.articles?.title     ?? { it: "Blog", en: "Blog" };
  const TX_PUBLISHED = translations?.articles?.published ?? { it: "Pubblicato", en: "Published" };
  const TX_READ      = translations?.articles?.read      ?? { it: "Leggi", en: "Read" };

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

  if (loading) {
    return (
      <div className="page-articles page-offset--lg">
        <section className="section-spacing">
          <div className="container">Caricamento…</div>
        </section>
      </div>
    );
  }

  if (!articles.length) {
    return (
      <div className="page-articles">
        <section className="section-spacing">
          <div className="container">Nessun articolo</div>
        </section>
      </div>
    );
  }

  // Ordina dal più recente (EU date-safe)
  const sorted = [...articles].sort(
    (a, b) => (parseDate(b?.date)?.getTime?.() ?? 0) - (parseDate(a?.date)?.getTime?.() ?? 0)
  );

  return (
    <div className="page-articles">
      <section className="section-spacing">
        <div className="container">
          <h1 className="section-title">{t(TX_TITLE)}</h1>

          <div className="grid-3">
            {sorted.map((a) => {
              const titleObj   = a?.title && typeof a.title === "object" ? a.title : { it: String(a?.title || ""), en: String(a?.title || "") };
              const excerptObj = a?.excerpt && typeof a.excerpt === "object" ? a.excerpt : { it: String(a?.excerpt || ""), en: String(a?.excerpt || "") };
              const title   = titleObj?.[lang] ?? titleObj?.it ?? "";
              const excerpt = excerptObj?.[lang] ?? excerptObj?.it ?? "";
              const imgSrc  = a?.image || "/media/placeholder.jpg";

              return (
                <article key={a.id ?? a.title} className="artwork-card">
                  <img
                    src={imgSrc}
                    alt={title || "Article image"}
                    className="artwork-image"
                    style={{ aspectRatio: "3/2", objectFit: "cover" }}
                    onError={(e) => { e.currentTarget.src = "/media/placeholder.jpg"; }}
                  />
                  <div className="artwork-info">
                    <h2 className="artwork-title">{title}</h2>
                    {a?.date && (
                      <div className="small-text" style={{ marginTop: "0.25rem" }}>
                        {t(TX_PUBLISHED)} {formatDateEU(a.date)}
                      </div>
                    )}
                    {excerpt && (
                      <p className="body-text" style={{ marginTop: "0.75rem" }}>
                        {excerpt}
                      </p>
                    )}
                    <Link to={`/articles/${a.id}`} className="btn btn-outline" style={{ marginTop: "1rem" }}>
                      {t(TX_READ)}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
