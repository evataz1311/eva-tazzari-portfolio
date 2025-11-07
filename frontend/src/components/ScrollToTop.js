import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ behavior = "instant" }) {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // disattiva il ripristino automatico del browser
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // vai in alto ad ogni cambio rotta (anche querystring)
    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, search]);

  return null;
}
