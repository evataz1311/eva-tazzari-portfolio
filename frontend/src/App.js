import React from "react";
import "./App.css";
import "./styles/portfolio.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Works from "./pages/Works";
import WorkDetail from "./pages/WorkDetail";
import Bio from "./pages/Bio";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import Contact from "./pages/Contact";

// Splash
import SplashIntro from "./components/SplashIntro";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        {/* Splash in cima: copre tutto finché non interagisci */}
        <SplashIntro
          image="/media/intro.jpg"   // cambia path se serve
          storageKey="splash_seen"   // mostrato una volta per sessione
        />

        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/works" element={<Works />} />
              <Route path="/works/:id" element={<WorkDetail />} />
              <Route path="/bio" element={<Bio />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/articles/:id" element={<ArticleDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
