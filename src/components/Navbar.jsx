import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Moon, 
  Sun, 
  Search, 
  X,
  FileText,
  Trash2
} from 'lucide-react';
import { POLICY_META } from '../data/policyData';

export default function Navbar({ 
  theme, 
  toggleTheme, 
  searchQuery, 
  setSearchQuery 
}) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isDeletePage = location.pathname === '/delete-account';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo-link">
          <img src="/logo.png" alt="Wallely Logo" className="brand-logo-img" />
          <span className="brand-name">{POLICY_META.appName}</span>
        </Link>

        {/* Center Nav Links */}
        <nav className="navbar-center-nav">
          <Link 
            to="/" 
            className={`nav-link ${!isDeletePage ? 'active' : ''}`}
          >
            <FileText size={15} />
            <span>Privacy Policy</span>
          </Link>
          <Link 
            to="/delete-account" 
            className={`nav-link ${isDeletePage ? 'active' : ''}`}
          >
            <Trash2 size={15} />
            <span>Delete Account</span>
          </Link>
        </nav>

        {/* Right Actions: Search + Theme Toggle */}
        <div className="navbar-actions">
          {!isDeletePage && (
            <div className="navbar-search">
              <Search className="search-icon" size={15} />
              <input
                type="text"
                placeholder="Search policy..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
                aria-label="Search Privacy Policy"
              />
              {searchQuery && (
                <button 
                  className="search-clear-btn" 
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear Search"
                >
                  <X size={13} />
                </button>
              )}
            </div>
          )}

          <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </div>
    </header>
  );
}
