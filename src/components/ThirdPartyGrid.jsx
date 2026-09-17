import React from 'react';
import { ExternalLink } from 'lucide-react';
import { THIRD_PARTY_PROVIDERS } from '../data/policyData';

export default function ThirdPartyGrid() {
  return (
    <div className="third-party-clean-grid">
      {THIRD_PARTY_PROVIDERS.map((provider, index) => (
        <div key={index} className="third-party-clean-card">
          <div className="provider-clean-header">
            <div>
              <h4 className="provider-clean-name">{provider.name}</h4>
              <span className="provider-clean-role">{provider.service}</span>
            </div>
            {provider.privacyUrl.startsWith('http') && (
              <a
                href={provider.privacyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="provider-privacy-link"
                title="Privacy Policy"
              >
                <span>Policy</span>
                <ExternalLink size={12} />
              </a>
            )}
          </div>

          <p className="provider-clean-desc">{provider.purpose}</p>

          <div className="provider-meta-box">
            <div className="provider-meta-item">
              <span className="meta-label">Data Shared:</span>
              <span className="meta-value">{provider.dataShared}</span>
            </div>
            <div className="provider-meta-item">
              <span className="meta-label">Security:</span>
              <span className="meta-value">{provider.securityTier}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
