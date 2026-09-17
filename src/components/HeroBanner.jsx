import React from 'react';
import { POLICY_META } from '../data/policyData';

export default function HeroBanner() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-content">
        <span className="hero-eyebrow">Legal & Compliance</span>
        <h1 className="hero-title">Privacy Policy</h1>
        <p className="hero-description">
          {POLICY_META.appPurpose}
        </p>

        <div className="hero-meta-row">
          <span>Effective: <strong>{POLICY_META.effectiveDate}</strong></span>
          <span className="meta-dot">·</span>
          <span>Last Updated: <strong>{POLICY_META.lastUpdated}</strong></span>
          <span className="meta-dot">·</span>
          <span>Version: <strong>v{POLICY_META.version}</strong></span>
        </div>
      </div>
    </section>
  );
}
