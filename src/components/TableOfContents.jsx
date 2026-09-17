import React from 'react';
import { SECTIONS, POLICY_META } from '../data/policyData';

export default function TableOfContents({ activeSection, onSelectSection }) {
  return (
    <aside className="toc-sidebar">
      <div className="toc-sticky-box">
        <div className="toc-header">
          <span className="toc-title">Contents</span>
        </div>

        <nav className="toc-nav" aria-label="Policy Table of Contents">
          <ul className="toc-list">
            {SECTIONS.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <li key={section.id} className="toc-item">
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectSection(section.id);
                    }}
                    className={`toc-link ${isActive ? 'active' : ''}`}
                  >
                    <span className="toc-number">{section.number}.</span>
                    <span className="toc-link-text">{section.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="toc-footer-card">
          <span className="toc-footer-text">Questions or requests?</span>
          <a href={`mailto:${POLICY_META.supportEmail}`} className="toc-footer-link">
            {POLICY_META.supportEmail}
          </a>
        </div>
      </div>
    </aside>
  );
}
