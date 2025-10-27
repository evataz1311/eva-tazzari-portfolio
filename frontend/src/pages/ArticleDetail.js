import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/mock';
import { articlesAPI } from '../services/api';
import { ArrowLeft, Calendar } from 'lucide-react';
import '../styles/portfolio.css';

const ArticleDetail = () => {
  const { id } = useParams();
  const { t } = useLanguage();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await articlesAPI.getById(id);
        setArticle(data);
      } catch (error) {
        console.error('Error fetching article:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div style={{ paddingTop: '120px', textAlign: 'center', minHeight: '100vh' }}>
        <div className="container">
          <p className="body-text">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div style={{ paddingTop: '120px', textAlign: 'center' }}>
        <div className="container">
          <p className="body-text">{t({ it: 'Articolo non trovato', en: 'Article not found' })}</p>
          <Link to="/articles" className="btn btn-outline" style={{ marginTop: 'var(--spacing-lg)' }}>
            <ArrowLeft size={16} />
            {t({ it: 'Torna agli articoli', en: 'Back to articles' })}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section-spacing">
        <div className="container">
          <Link 
            to="/articles"
            className="btn btn-outline"
            style={{ marginBottom: 'var(--spacing-xl)' }}
          >
            <ArrowLeft size={16} />
            {t({ it: 'Torna agli articoli', en: 'Back to articles' })}
          </Link>

          <article style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Header */}
            <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', marginBottom: 'var(--spacing-md)' }}>
                <Calendar size={16} style={{ color: 'var(--color-gray-500)' }} />
                <span className="small-text">
                  {new Date(article.date).toLocaleDateString(t({ it: 'it-IT', en: 'en-US' }), { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <h1 className="section-title" style={{ marginBottom: 'var(--spacing-xl)' }}>
                {t(article.title)}
              </h1>
              <p className="body-text" style={{ fontSize: '1.25rem', color: 'var(--color-gray-600)' }}>
                {t(article.excerpt)}
              </p>
            </div>

            {/* Featured Image */}
            <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
              <img 
                src={article.image} 
                alt={t(article.title)}
                style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }}
              />
            </div>

            {/* Content */}
            <div style={{ paddingTop: 'var(--spacing-xl)', borderTop: '1px solid var(--color-gray-200)' }}>
              <div className="body-text" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                {t(article.content).split('\n').map((paragraph, index) => (
                  <p key={index} style={{ marginBottom: 'var(--spacing-lg)' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Author Info */}
            <div style={{ marginTop: 'var(--spacing-3xl)', paddingTop: 'var(--spacing-2xl)', borderTop: '1px solid var(--color-gray-200)' }}>
              <div style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'center' }}>
                <img 
                  src="/media/bio/foto-bio-vert.png"
                  alt="Eva Tazzari"
                  style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <h3 className="artwork-title" style={{ marginBottom: 'var(--spacing-xs)' }}>Eva Tazzari</h3>
                  <p className="small-text">
                    {t({ it: 'Artista e scultrice contemporanea', en: 'Contemporary artist and sculptor' })}
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
