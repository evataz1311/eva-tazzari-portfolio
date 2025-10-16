import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/mock';
import { artworksAPI } from '../services/api';
import '../styles/portfolio.css';

const Works = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        setLoading(true);
        const category = activeFilter === 'all' ? null : activeFilter;
        const data = await artworksAPI.getAll(category);
        setArtworks(data);
      } catch (error) {
        console.error('Error fetching artworks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, [activeFilter]);

  const filters = [
    { key: 'all', label: translations.works.all },
    { key: 'sculpture', label: translations.works.sculpture },
    { key: 'wearable', label: translations.works.wearable },
    { key: 'installation', label: translations.works.installation }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="section-spacing">
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
              {artworks.map((work, index) => (
                <div 
                  key={work.id} 
                  className="artwork-card fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <Link to={`/works/${work.id}`}>
                    <div className="image-overlay">
                      <img 
                        src={work.image} 
                        alt={t(work.title)} 
                        className="artwork-image"
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
