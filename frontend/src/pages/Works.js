import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/mock';
import { artworksAPI } from '../services/api';
import '../styles/portfolio.css';
import { artworks as artworksMock } from '../data/mock';
import React, { useState, useEffect, useMemo } from 'react';




const Works = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const norm = (s = "") => s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
  const visibleArtworks = useMemo(() => {
  if (activeFilter === 'all') return artworks;
  const k = norm(activeFilter);
  return artworks.filter(w => {
    const cats = Array.isArray(w.categories) ? w.categories : [w.category];
    return cats.filter(Boolean).map(norm).includes(k);
  });
  }, [artworks, activeFilter]);
  
  useEffect(() => {
  setArtworks(artworksMock);
  setLoading(false);
}, []);

  

  const filters = [
    { key: 'all', label: translations.works.all },
    { key: 'sculpture', label: translations.works.sculpture },
    { key: 'wearable', label: translations.works.wearable },
    { key: 'installation', label: translations.works.installation }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="section-spacing page-offset">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <h1 className="section-title">{t(translations.works.title)}</h1>
          </div>

          {/* Filter Bar */}
          <div className="filter-bar">
            {filters.map(filter => (
              <button
                key={filter.key}
                className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {t(filter.label)}
              </button>
            ))}
          </div>

          {/* Loading State */}
          {loading ? (
            <div style={{ textAlign: 'center', padding: 'var(--spacing-3xl)' }}>
              <p className="body-text">Loading...</p>
            </div>
          ) : (
            /* Works Grid */
            <div className="grid-3">
              {visibleArtworks.map((work, index) => (
                <div 
                  key={work.id} 
                  className="artwork-card fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <Link to={`/works/${work.id}`}>
  <div className="image-box">
    <img
      src={work.image}
      alt={t(work.title)}
      className="artwork-image"
      onError={(e) => { e.currentTarget.src = '/media/placeholder.jpg'; }}
    />
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
          )}
        </div>
          </section>
    </div>
  );
};

export default Works;

