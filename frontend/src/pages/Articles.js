import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations, articles } from '../data/mock';
import { ArrowRight, Calendar } from 'lucide-react';
import '../styles/portfolio.css';

const Articles = () => {
  const { t } = useLanguage();

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="section-spacing">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <h1 className="section-title">{t(translations.articles.title)}</h1>
          </div>

          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gap: 'var(--spacing-3xl)' }}>
              {articles.map((article, index) => (
                <article 
                  key={article.id}
                  className="fade-in-up"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    paddingBottom: 'var(--spacing-3xl)',
                    borderBottom: index < articles.length - 1 ? '1px solid var(--color-gray-200)' : 'none'
                  }}
                >
                  <Link to={`/articles/${article.id}`} style={{ textDecoration: 'none' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 'var(--spacing-2xl)', alignItems: 'center' }}>
                      <div className="image-overlay" style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                        <img 
                          src={article.image} 
                          alt={t(article.title)}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        />
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', marginBottom: 'var(--spacing-sm)' }}>
                          <Calendar size={14} style={{ color: 'var(--color-gray-500)' }} />
                          <span className="small-text">
                            {new Date(article.date).toLocaleDateString(t({ it: 'it-IT', en: 'en-US' }), { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                        <h2 className="artwork-title" style={{ marginBottom: 'var(--spacing-md)' }}>
                          {t(article.title)}
                        </h2>
                        <p className="body-text" style={{ marginBottom: 'var(--spacing-lg)' }}>
                          {t(article.excerpt)}
                        </p>
                        <span className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                          {t(translations.home.readMore)}
                          <ArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
