import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations, artworks } from '../data/mock';
import { ArrowLeft, Calendar, Ruler, Layers, MapPin, CheckCircle, XCircle } from 'lucide-react';
import '../styles/portfolio.css';

const WorkDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const work = artworks.find(w => w.id === parseInt(id));

  if (!work) {
    return (
      <div style={{ paddingTop: '120px', textAlign: 'center' }}>
        <div className="container">
          <p className="body-text">{t({ it: 'Opera non trovata', en: 'Work not found' })}</p>
          <Link to="/works" className="btn btn-outline" style={{ marginTop: 'var(--spacing-lg)' }}>
            <ArrowLeft size={16} />
            {t({ it: 'Torna alle opere', en: 'Back to works' })}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section-spacing">
        <div className="container">
          <button 
            onClick={() => navigate('/works')}
            className="btn btn-outline"
            style={{ marginBottom: 'var(--spacing-xl)' }}
          >
            <ArrowLeft size={16} />
            {t({ it: 'Torna alle opere', en: 'Back to works' })}
          </button>

          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 'var(--spacing-3xl)', alignItems: 'start' }}>
            {/* Image */}
            <div>
              <img 
                src={work.image} 
                alt={t(work.title)}
                style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }}
              />
            </div>

            {/* Details */}
            <div>
              <span className="category-badge" style={{ marginBottom: 'var(--spacing-md)', display: 'inline-block' }}>
                {t(translations.works[work.category])}
              </span>
              <h1 className="section-title" style={{ marginBottom: 'var(--spacing-lg)' }}>
                {t(work.title)}
              </h1>

              <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
                  <Calendar size={18} style={{ color: 'var(--color-gray-500)' }} />
                  <span className="small-text">
                    <strong>{t(translations.works.year)}:</strong> {work.year}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
                  <Layers size={18} style={{ color: 'var(--color-gray-500)' }} />
                  <span className="small-text">
                    <strong>{t(translations.works.technique)}:</strong> {t(work.technique)}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
                  <Ruler size={18} style={{ color: 'var(--color-gray-500)' }} />
                  <span className="small-text">
                    <strong>{t(translations.works.dimensions)}:</strong> {work.dimensions}
                  </span>
                </div>
                {work.series && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
                    <span className="small-text">
                      <strong>{t(translations.works.series)}:</strong> {t(work.series)}
                    </span>
                  </div>
                )}
                {work.exhibition && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
                    <MapPin size={18} style={{ color: 'var(--color-gray-500)' }} />
                    <span className="small-text">
                      <strong>{t(translations.works.exhibition)}:</strong> {work.exhibition}
                    </span>
                  </div>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginTop: 'var(--spacing-lg)' }}>
                  {work.available ? (
                    <CheckCircle size={18} style={{ color: '#10b981' }} />
                  ) : (
                    <XCircle size={18} style={{ color: 'var(--color-gray-400)' }} />
                  )}
                  <span className="small-text" style={{ fontWeight: 500 }}>
                    {work.available ? t(translations.works.available) : t(translations.works.sold)}
                  </span>
                </div>
              </div>

              <div style={{ paddingTop: 'var(--spacing-lg)', borderTop: '1px solid var(--color-gray-200)' }}>
                <p className="body-text">{t(work.description)}</p>
              </div>

              <div style={{ marginTop: 'var(--spacing-2xl)' }}>
                <Link to="/contact" className="btn btn-primary">
                  {t({ it: 'Richiedi informazioni', en: 'Request information' })}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkDetail;
