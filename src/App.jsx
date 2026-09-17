import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import DeleteAccountPage from './pages/DeleteAccountPage';
import './App.css';

function MainApp() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('wallely-theme');
    return saved || 'dark';
  });
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('wallely-theme', theme);
  }, [theme]);

  // Reset scroll and search on page route changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setSearchQuery('');
  }, [location.pathname]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`app-root theme-${theme}`}>
      {/* Top Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main className="main-app-content">
        <Routes>
          <Route 
            path="/" 
            element={
              <PrivacyPolicyPage 
                searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery}
                scrollToSection={scrollToSection} 
              />
            } 
          />
          <Route 
            path="/privacy-policy" 
            element={
              <PrivacyPolicyPage 
                searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery}
                scrollToSection={scrollToSection} 
              />
            } 
          />
          <Route 
            path="/delete-account" 
            element={<DeleteAccountPage />} 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onScrollToTop={scrollToTop} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}
