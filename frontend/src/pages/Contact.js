import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/mock';
import { contactAPI } from '../services/api';
import { Mail, Send } from 'lucide-react';
import '../styles/portfolio.css';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });
    setLoading(true);

    try {
      await contactAPI.submit(formData);
      setStatus({ 
        type: 'success', 
        message: t(translations.contact.success)
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setStatus({ 
        type: 'error', 
        message: t(translations.contact.error)
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="section-spacing">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <h1 className="section-title">{t(translations.contact.title)}</h1>
            <p className="body-text" style={{ marginTop: 'var(--spacing-md)', color: 'var(--color-gray-600)' }}>
              {t(translations.contact.subtitle)}
            </p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-3xl)' }}>
              {/* Contact Info */}
              <div>
                <h3 className="artwork-title" style={{ marginBottom: 'var(--spacing-lg)' }}>
                  {t({ it: 'Informazioni', en: 'Information' })}
                </h3>
                <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-xs)' }}>
                      <Mail size={18} style={{ color: 'var(--color-gray-500)' }} />
                      <span className="small-text" style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Email
                      </span>
                    </div>
                    <a 
                      href="mailto:info@evatazzari.com" 
                      className="body-text"
                      style={{ color: 'var(--color-black)', textDecoration: 'none' }}
                    >
                      info@evatazzari.com
                    </a>
                  </div>

                  <div>
                    <span className="small-text" style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: 'var(--spacing-xs)' }}>
                      {t({ it: 'Studio', en: 'Studio' })}
                    </span>
                    <p className="body-text" style={{ margin: 0 }}>
                      Bologna, Italia
                    </p>
                  </div>

                  <div style={{ paddingTop: 'var(--spacing-lg)' }}>
                    <p className="body-text" style={{ color: 'var(--color-gray-600)' }}>
                      {t({ 
                        it: 'Disponibile per commissioni, collaborazioni e visite in studio su appuntamento.',
                        en: 'Available for commissions, collaborations, and studio visits by appointment.'
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                    <label 
                      htmlFor="name" 
                      className="small-text"
                      style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}
                    >
                      {t(translations.contact.name)}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      style={{
                        width: '100%',
                        padding: 'var(--spacing-sm)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1rem',
                        border: '1px solid var(--color-gray-300)',
                        backgroundColor: 'var(--color-white)',
                        transition: 'border-color 0.3s',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-black)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--color-gray-300)'}
                    />
                  </div>

                  <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                    <label 
                      htmlFor="email" 
                      className="small-text"
                      style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}
                    >
                      {t(translations.contact.email)}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      style={{
                        width: '100%',
                        padding: 'var(--spacing-sm)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1rem',
                        border: '1px solid var(--color-gray-300)',
                        backgroundColor: 'var(--color-white)',
                        transition: 'border-color 0.3s',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-black)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--color-gray-300)'}
                    />
                  </div>

                  <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                    <label 
                      htmlFor="message" 
                      className="small-text"
                      style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}
                    >
                      {t(translations.contact.message)}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      rows="6"
                      style={{
                        width: '100%',
                        padding: 'var(--spacing-sm)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1rem',
                        border: '1px solid var(--color-gray-300)',
                        backgroundColor: 'var(--color-white)',
                        transition: 'border-color 0.3s',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-black)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--color-gray-300)'}
                    />
                  </div>

                  {status.message && (
                    <div 
                      style={{ 
                        padding: 'var(--spacing-sm)',
                        marginBottom: 'var(--spacing-lg)',
                        backgroundColor: status.type === 'success' ? '#d1fae5' : '#fee2e2',
                        color: status.type === 'success' ? '#065f46' : '#991b1b',
                        borderRadius: '2px'
                      }}
                    >
                      <p className="small-text" style={{ margin: 0 }}>{status.message}</p>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    style={{ width: '100%' }}
                    disabled={loading}
                  >
                    <Send size={16} />
                    {loading ? 'Sending...' : t(translations.contact.send)}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
