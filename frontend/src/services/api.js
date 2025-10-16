import axios from 'axios';

const API_BASE = `${process.env.REACT_APP_BACKEND_URL}/api`;

// Transform backend data to frontend format (bilingual objects)
const transformArtwork = (artwork) => ({
  id: artwork.id,
  title: { it: artwork.title_it, en: artwork.title_en },
  year: artwork.year,
  category: artwork.category,
  technique: { it: artwork.technique_it, en: artwork.technique_en },
  dimensions: artwork.dimensions,
  description: { it: artwork.description_it, en: artwork.description_en },
  series: artwork.series_it ? { it: artwork.series_it, en: artwork.series_en } : null,
  exhibition: artwork.exhibition,
  available: artwork.available,
  image: artwork.image,
  featured: artwork.featured
});

const transformArticle = (article) => ({
  id: article.id,
  title: { it: article.title_it, en: article.title_en },
  date: article.date,
  excerpt: { it: article.excerpt_it, en: article.excerpt_en },
  content: { it: article.content_it, en: article.content_en },
  image: article.image,
  featured: article.featured
});

const transformBio = (bio) => ({
  short: { it: bio.short_it, en: bio.short_en },
  extended: { it: bio.extended_it, en: bio.extended_en },
  image: bio.image,
  exhibitions: bio.exhibitions.map(ex => ({
    year: ex.year,
    event: { it: ex.event_it, en: ex.event_en }
  }))
});

export const artworksAPI = {
  getAll: async (category) => {
    const response = await axios.get(`${API_BASE}/artworks`, { params: category ? { category } : {} });
    return response.data.artworks.map(transformArtwork);
  },
  getById: async (id) => {
    const response = await axios.get(`${API_BASE}/artworks/${id}`);
    return transformArtwork(response.data.artwork);
  },
  create: async (data) => {
    const response = await axios.post(`${API_BASE}/artworks`, data);
    return transformArtwork(response.data);
  },
  update: async (id, data) => {
    const response = await axios.put(`${API_BASE}/artworks/${id}`, data);
    return transformArtwork(response.data);
  },
  delete: async (id) => {
    const response = await axios.delete(`${API_BASE}/artworks/${id}`);
    return response.data;
  }
};

export const articlesAPI = {
  getAll: async () => {
    const response = await axios.get(`${API_BASE}/articles`);
    return response.data.articles.map(transformArticle);
  },
  getById: async (id) => {
    const response = await axios.get(`${API_BASE}/articles/${id}`);
    return transformArticle(response.data.article);
  },
  create: async (data) => {
    const response = await axios.post(`${API_BASE}/articles`, data);
    return transformArticle(response.data);
  },
  update: async (id, data) => {
    const response = await axios.put(`${API_BASE}/articles/${id}`, data);
    return transformArticle(response.data);
  },
  delete: async (id) => {
    const response = await axios.delete(`${API_BASE}/articles/${id}`);
    return response.data;
  }
};

export const bioAPI = {
  get: async () => {
    const response = await axios.get(`${API_BASE}/bio`);
    return transformBio(response.data.bio);
  },
  update: async (data) => {
    const response = await axios.put(`${API_BASE}/bio`, data);
    return transformBio(response.data);
  }
};

export const contactAPI = {
  submit: async (data) => {
    const response = await axios.post(`${API_BASE}/contact`, data);
    return response.data;
  }
};
