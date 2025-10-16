import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations, bioData } from '../data/mock';
import '../styles/portfolio.css';

const Bio = () => {
  const { t } = useLanguage();

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="section-spacing">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <h1 className="section-title">{t(translations.bio.title)}</h1>
          </div>

          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {/* Portrait and Short Bio */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 'var(--spacing-3xl)', alignItems: 'start', marginBottom: 'var(--spacing-3xl)' }}>
              <div>
                <img 
                  src={bioData.image} 
                  alt="Eva Tazzari"
                  style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }}
                />
              </div>
              <div>
                <p className="body-text" style={{ fontSize: '1.25rem', lineHeight: '1.8', marginBottom: 'var(--spacing-xl)' }}>
                  {t(bioData.short)}
                </p>
                <p className="body-text">
                  {t(bioData.extended)}
                </p>
              </div>
            </div>

            {/* Exhibitions */}
            <div style={{ paddingTop: 'var(--spacing-3xl)', borderTop: '1px solid var(--color-gray-200)' }}>
              <h2 className="artwork-title" style={{ marginBottom: 'var(--spacing-xl)' }}>
                {t(translations.bio.exhibitions)}
              </h2>
              <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
                {bioData.exhibitions.map((exhibition, index) => (
                  <div 
                    key={index}
                    style={{ 
                      display: 'grid', 
                      gridTemplateColumns: '100px 1fr', 
                      gap: 'var(--spacing-lg)',
                      paddingBottom: 'var(--spacing-lg)',
                      borderBottom: index < bioData.exhibitions.length - 1 ? '1px solid var(--color-gray-100)' : 'none'
                    }}
                  >
                    <span className="small-text" style={{ fontWeight: 600, color: 'var(--color-black)' }}>
                      {exhibition.year}
                    </span>
                    <span className="body-text">
                      {t(exhibition.event)}
                    </span>
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
