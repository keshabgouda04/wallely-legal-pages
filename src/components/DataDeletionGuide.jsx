import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function DataDeletionGuide() {
  return (
    <div className="deletion-guide-clean">
      <div className="deletion-step-card">
        <h4 className="step-card-title">How to Delete Your Account & All Data</h4>
        <p className="step-card-desc">
          Account and data deletion is available exclusively directly within the Wallely mobile application:
        </p>
        
        <ol className="clean-numbered-list large">
          <li>Open the <strong>Wallely</strong> app on your mobile device.</li>
          <li>Tap on the <strong>Profile</strong> tab in the bottom navigation bar.</li>
          <li>Scroll to the bottom of the screen and tap <strong>Delete Account</strong>.</li>
          <li>Confirm the prompt. Your user account, authentication records, bills, uploaded receipt images, and digital cards are immediately and permanently erased.</li>
        </ol>
      </div>

      <div className="deletion-clean-footer">
        <span>Need full breakdown of erased data and FAQs?</span>
        <Link to="/delete-account" className="clean-text-link">
          View Delete Account Page <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}
