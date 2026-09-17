import React, { useState, useEffect } from 'react';
import HeroBanner from '../components/HeroBanner';
import ExecutiveSummary from '../components/ExecutiveSummary';
import TableOfContents from '../components/TableOfContents';
import PolicySection from '../components/PolicySection';
import { SECTIONS } from '../data/policyData';
import { Search, AlertCircle } from 'lucide-react';

export default function PrivacyPolicyPage({ searchQuery, setSearchQuery, scrollToSection }) {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    document.title = "Privacy Policy - Wallely";
  }, []);

  // Intersection Observer for Table of Contents scrollspy
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-15% 0px -65% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const filteredSections = SECTIONS.filter((section) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const titleMatch = section.title.toLowerCase().includes(q);
    const contentMatch = section.content && section.content.toLowerCase().includes(q);
    const subMatch = section.subsections && section.subsections.some(
      s => s.title.toLowerCase().includes(q) || (s.items && s.items.some(i => i.toLowerCase().includes(q)))
    );
    const bulletsMatch = section.bullets && section.bullets.some(b => b.toLowerCase().includes(q));
    return titleMatch || contentMatch || subMatch || bulletsMatch;
  });

  return (
    <div className="privacy-page-wrapper">
      {/* Hero Section */}
      <HeroBanner />

      <div className="content-container">
        {/* Executive Summary */}
        <ExecutiveSummary />

        {/* Search Results Notification Banner (Only when searching) */}
        {searchQuery && (
          <div className="search-filter-banner">
            <div className="filter-info">
              <Search size={15} />
              <span>Showing {filteredSections.length} section(s) for <strong>"{searchQuery}"</strong></span>
            </div>
            <button className="clear-filter-btn" onClick={() => setSearchQuery('')}>
              Clear
            </button>
          </div>
        )}

        {/* Layout: Sidebar TOC + Policy Content */}
        <div className="policy-layout-grid">
          <TableOfContents
            activeSection={activeSection}
            onSelectSection={scrollToSection}
          />

          <section className="policy-articles-container">
            {filteredSections.length > 0 ? (
              filteredSections.map((section) => (
                <PolicySection
                  key={section.id}
                  section={section}
                  searchQuery={searchQuery}
                />
              ))
            ) : (
              <div className="no-results-card">
                <AlertCircle size={32} className="text-muted" />
                <h3>No matching sections</h3>
                <p>Try searching for other terms like "OCR", "camera", "Cloudflare", or "deletion".</p>
                <button className="btn-secondary" onClick={() => setSearchQuery('')}>
                  Clear Search
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
