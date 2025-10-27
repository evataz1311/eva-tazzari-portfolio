import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations, artworks as artworksMock } from "../data/mock";
import {
  ArrowLeft,
  Calendar,
  Ruler,
  Layers,
  MapPin,
  CheckCircle,
  XCircle,
} from "lucide-react";
import "../styles/portfolio.css";

const WorkDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();

  // trova l'opera per id (funziona anche se id è stringa)
  const work = artworksMock.find((w) => String(w.id) === String(id));

  // se non trovata
  if (!work) {
    return (
      <div style={{ paddingTop: "120px", textAlign: "center" }}>
        <p className="body-text">
          {t({ it: "Opera non trovata", en: "Work not found" })}
        </p>
        <button
          onClick={() => navigate("/works")}
          className="btn btn-outline"
          style={{ marginTop: "var(--spacing-lg)" }}
        >
          <ArrowLeft size={16} /> {t({ it: "Torna alle opere", en: "Back to works" })}
        </button>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "100px" }}>
      <section className="section-spacing">
        <div className="container">
          <Link to="/works" className="btn btn-outline" style={{ marginBottom: "var(--spacing-lg)" }}>
            <ArrowLeft size={16} /> {t({ it: "Torna alle opere", en: "Back to works" })}
          </Link>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.5fr 1fr",
              gap: "var(--spacing-3xl)",
              alignItems: "start",
            }}
          >
            {/* Immagine */}
            <div>
              <img
                src={work.image}
                alt={t(work.title)}
                onError={(e) => { e.currentTarget.src = '/media/placeholder.jpg'; }}
                style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover" }}
              />
            </div>

            {/* Dettagli */}
            <div>
              <span
                className="category-badge"
                style={{ marginBottom: "var(--spacing-md)", display: "inline-block" }}
              >
                {t(translations.works[work.category])}
              </span>

              <h1 className="section-title" style={{ marginBottom: "var(--spacing-lg)" }}>
                {t(work.title)}
              </h1>

              {/* Metadati */}
              <div style={{ marginBottom: "var(--spacing-xl)" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--spacing-sm)",
                    marginBottom: "var(--spacing-md)",
                  }}
                >
                  <Calendar size={18} style={{ color: "var(--color-gray-500)" }} />
                  <span className="small-text">
                    <strong>{t(translations.works.year)}:</strong> {work.year}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--spacing-sm)",
                    marginBottom: "var(--spacing-md)",
                  }}
                >
                  <Layers size={18} style={{ color: "var(--color-gray-500)" }} />
                  <span className="small-text">
                    <strong>{t(translations.works.technique)}:</strong> {t(work.technique)}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--spacing-sm)",
                    marginBottom: "var(--spacing-md)",
                  }}
                >
                  <Ruler size={18} style={{ color: "var(--color-gray-500)" }} />
                  <span className="small-text">
                    <strong>{t(translations.works.dimensions)}:</strong> {work.dimensions}
                  </span>
                </div>

                {work.series && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--spacing-sm)",
                      marginBottom: "var(--spacing-md)",
                    }}
                  >
                    <MapPin size={18} style={{ color: "var(--color-gray-500)" }} />
                    <span className="small-text">
                      <strong>{t(translations.works.series)}:</strong> {t(work.series)}
                    </span>
                  </div>
                )}

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--spacing-sm)",
                    marginTop: "var(--spacing-lg)",
                  }}
                >
                  {work.available === true ? (
                     <>
                        <CheckCircle size={18} style={{ color: "#10b981" }} />
                        <span className="small-text">{t(translations.works.available)}</span>
                     </>
                  ) : work.available === false ? (
                    <>
                      <XCircle size={18} style={{ color: "var(--color-gray-400)" }} />
                      <span className="small-text">{t(translations.works.sold)}</span>
                     </>
                  ) : null}
                </div>
              </div>

              {/* Descrizione */}
              <p
                className="body-text"
                style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "var(--spacing-xl)" }}
              >
                {t(work.description)}
              </p>

              <Link to="/contact" className="btn btn-primary">
                {t({ it: "Richiedi informazioni", en: "Request information" })}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkDetail;
