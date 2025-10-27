// frontend/src/services/api.js
const API = process.env.REACT_APP_API_URL || "http://localhost:4000";

async function postJSON(url, data) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(`HTTP ${res.status} ${txt}`);
  }
  return res.json();
}

// --- MOCK DATA per liste/letture (finché non usi il backend) ---
import { artworks as artworksMock, articles as articlesMock } from "../data/mock";

// Named export: artworksAPI
export const artworksAPI = {
  async list() {
    return artworksMock;
  },
  async getById(id) {
    const n = Number(id);
    return artworksMock.find((w) => w.id === n) || null;
  },
};

// Named export: articlesAPI
export const articlesAPI = {
  async list() { return articlesMock; },
  async getById(id) {
    const n = Number(id);
    return articlesMock.find(a => a.id === n) || null;
  },
  };


// Named export: contactAPI
export const contactAPI = {
  submit(formData) {
    return postJSON(`${API}/api/contact`, formData);
  },
};

// Export di comodo (non usato dai tuoi import, ma utile)
export default { artworksAPI, articlesAPI, contactAPI };
