import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { POLICY_META } from '../data/policyData';

export default function Footer({ onScrollToTop }) {
  return (
    <footer className="footer-clean">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand-side">
            <Link to="/" className="footer-logo">
              <img src="/logo.png" alt="Wallely Logo" className="footer-logo-img" />
              <span>{POLICY_META.appName}</span>
            </Link>
            <p className="footer-desc">
              {POLICY_META.appPurpose}
            </p>
          </div>

          <div className="footer-links-side">
            <div className="footer-col">
              <span className="footer-col-header">Navigation</span>
              <Link to="/">Privacy Policy</Link>
              <Link to="/delete-account">Delete Account</Link>
            </div>

            <div className="footer-col">
              <span className="footer-col-header">Support</span>
              <a href={`mailto:${POLICY_META.supportEmail}`}>{POLICY_META.supportEmail}</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p>© {new Date().getFullYear()} {POLICY_META.appName}. All rights reserved.</p>
          <button 
            className="footer-top-btn" 
            onClick={onScrollToTop}
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
