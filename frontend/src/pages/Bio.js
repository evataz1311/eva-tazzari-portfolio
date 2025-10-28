import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/mock';
import { bioAPI } from '../services/api';
import '../styles/portfolio.css';
import { bioData as bioMock } from '../data/mock';

const Bio = () => {
  const { t } = useLanguage();
  const [bioData, setBioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setBioData(bioMock); // per ora usiamo il mock locale
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div style={{ paddingTop: '80px', textAlign: 'center', minHeight: '100vh' }}>
        <div className="container" />
      </div>
    );
  }

  if (!bioData) {
    return (
      <div style={{ paddingTop: '80px', textAlign: 'center' }}>
        <div className="container">
          <p className="body-text">Bio data not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-bio" style={{ paddingTop: '80px' }}>
      <section className="section-spacing">
        <div className="container">
          <div className="bio-header" style={{ textAlign: 'center' }}>
            <h1 className="section-title">{t(translations.bio.title)}</h1>
          </div>

          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {/* Portrait + Testo */}
            <div
              className="bio-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 'var(--spacing-2xl)',
                alignItems: 'start',
                marginBottom: 'var(--spacing-2xl)',
              }}
            >
              <div className="bio-hero">
                <img
                  src={bioData.image}
                  alt="Eva Tazzari"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              <div className="bio-text">
                <p className="body-text" style={{ fontSize: '1.15rem', lineHeight: 1.75, marginBottom: 'var(--spacing-lg)' }}>
                  {t(bioData.short)}
                </p>
                <p className="body-text">
                  {t(bioData.extended)}
                </p>
              </div>
            </div>

            {/* Mostre */}
            <div style={{ paddingTop: 'var(--spacing-2xl)', borderTop: '1px solid var(--color-gray-200)' }}>
              <h2 className="artwork-title" style={{ marginBottom: 'var(--spacing-lg)' }}>
                {t(translations.bio.exhibitions)}
              </h2>
              <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
                {bioData.exhibitions.map((exhibition, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '100px 1fr',
                      gap: 'var(--spacing-md)',
                      paddingBottom: 'var(--spacing-md)',
                      borderBottom:
                        index < bioData.exhibitions.length - 1
                          ? '1px solid var(--color-gray-100)'
                          : 'none',
                    }}
                  >
                    <span className="small-text" style={{ fontWeight: 600, color: 'var(--color-black)' }}>
                      {exhibition.year}
                    </span>
                    <span className="body-text">{t(exhibition.event)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bio;
