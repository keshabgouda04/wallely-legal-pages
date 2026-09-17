import React, { useState } from 'react';
import { Link2, Check, ExternalLink } from 'lucide-react';
import PermissionsGrid from './PermissionsGrid';
import ThirdPartyGrid from './ThirdPartyGrid';
import DataDeletionGuide from './DataDeletionGuide';
import RetentionTable from './RetentionTable';
import { POLICY_META } from '../data/policyData';

export default function PolicySection({ section, searchQuery }) {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopySectionLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${section.id}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const isMatched = searchQuery && (
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (section.content && section.content.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <article 
      id={section.id} 
      className={`policy-section-card ${isMatched ? 'search-match' : ''}`}
    >
      {/* Section Header */}
      <div className="section-card-header">
        <div className="section-title-wrap">
          <span className="section-number-tag">Section {section.number}</span>
          <h2 className="section-heading">{section.title}</h2>
        </div>

        <button 
          className="section-anchor-btn" 
          onClick={handleCopySectionLink}
          title="Copy link to this section"
          aria-label={`Copy Link to Section ${section.number}: ${section.title}`}
        >
          {copiedLink ? <Check size={13} /> : <Link2 size={13} />}
          <span>{copiedLink ? 'Copied' : 'Link'}</span>
        </button>
      </div>

      {/* Main Narrative Content */}
      {section.content && (
        <div className="section-body-text">
          {section.content.trim().split('\n\n').map((para, pIdx) => {
            const formatted = para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            return (
              <p 
                key={pIdx} 
                dangerouslySetInnerHTML={{ __html: formatted }}
                className="section-paragraph"
              />
            );
          })}
        </div>
      )}

      {/* Structured Subsections */}
      {section.subsections && (
        <div className="subsections-list">
          {section.subsections.map((sub, sIdx) => (
            <div key={sIdx} className="subsection-block">
              <h3 className="subsection-title">{sub.title}</h3>
              {sub.description && <p className="subsection-desc">{sub.description}</p>}
              {sub.items && (
                <ul className="clean-bullet-list">
                  {sub.items.map((item, iIdx) => {
                    const formatted = item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                    return (
                      <li 
                        key={iIdx} 
                        dangerouslySetInnerHTML={{ __html: formatted }}
                      />
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Bullets List if available */}
      {section.bullets && (
        <ul className="clean-bullet-list">
          {section.bullets.map((bullet, bIdx) => {
            const formatted = bullet.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            return (
              <li 
                key={bIdx} 
                dangerouslySetInnerHTML={{ __html: formatted }}
              />
            );
          })}
        </ul>
      )}

      {/* Special Content Grids */}
      {section.tableType === 'permissions' && <PermissionsGrid />}
      {section.tableType === 'thirdParty' && <ThirdPartyGrid />}
      {section.tableType === 'retention' && <RetentionTable />}
      {section.highlightType === 'deletionGuide' && <DataDeletionGuide />}

      {/* Contact Cards in Section 15 */}
      {section.contactCards && (
        <div className="contact-clean-grid">
          <div className="contact-clean-card">
            <h4>Support & Data Requests</h4>
            <p>For general inquiries, account assistance, and data export:</p>
            <a href={`mailto:${POLICY_META.supportEmail}`}>{POLICY_META.supportEmail}</a>
          </div>

          <div className="contact-clean-card">
            <h4>Privacy Officer & DPO</h4>
            <p>For formal compliance, GDPR, and CCPA inquiries:</p>
            <a href={`mailto:${POLICY_META.dpoEmail}`}>{POLICY_META.dpoEmail}</a>
          </div>
        </div>
      )}
    </article>
  );
}
