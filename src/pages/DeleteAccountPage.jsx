import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp, Smartphone, ShieldCheck } from 'lucide-react';

export default function DeleteAccountPage() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    document.title = "Delete Account & Data - Wallely";
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Is account deletion permanent?",
      a: "Yes. Once confirmed in the app, your profile, authentication tokens, bills, receipts, and digital visiting cards are permanently deleted from active production databases and cannot be restored."
    },
    {
      q: "What happens to shared family vaults?",
      a: "When you delete your account, any bills you personally created are removed. You will be immediately removed as a member of any shared family vault."
    },
    {
      q: "How long does deletion take?",
      a: "In-app deletion via Profile → Delete Account is processed immediately in real-time."
    },
    {
      q: "Are my receipt images in Cloudflare deleted?",
      a: "Yes. All uploaded receipt photos, invoice PDFs, and media attachments in Cloudflare R2 storage are permanently purged upon account deletion."
    }
  ];

  return (
    <div className="delete-page-clean">
      <div className="delete-page-container">
        {/* Back Link */}
        <Link to="/" className="back-link">
          <ArrowLeft size={15} />
          <span>Back to Privacy Policy</span>
        </Link>

        {/* Header */}
        <header className="delete-header">
          <span className="hero-eyebrow">Account Management</span>
          <h1 className="delete-title">Delete Account & Data</h1>
          <p className="delete-subtitle">
            You maintain full control over your data. You can delete your account and all associated records directly inside the Wallely application.
          </p>
        </header>

        {/* Single In-App Deletion Method */}
        <div className="delete-methods-clean">
          <section className="delete-method-box">
            <span className="method-label">In-App Deletion (Instant & Real-Time)</span>
            <h2>How to Delete Your Account in the App</h2>
            <p>Account and data deletion must be performed directly inside the Wallely mobile application:</p>
            
            <ol className="clean-numbered-list large">
              <li>Open the <strong>Wallely</strong> mobile application on your device.</li>
              <li>Tap on the <strong>Profile</strong> tab in the navigation bar.</li>
              <li>Scroll to the bottom of the screen and select <strong>Delete Account</strong>.</li>
              <li>Confirm the deletion prompt. Your account, authentication credentials, bills, receipts, and personal data are immediately and permanently erased from our databases.</li>
            </ol>
          </section>
        </div>

        {/* Data Scope Table */}
        <section className="delete-section-block">
          <h2>What Data is Deleted</h2>
          <table className="clean-table">
            <thead>
              <tr>
                <th>Data Category</th>
                <th>Action Upon Deletion</th>
                <th>Storage Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Profile & Identity</strong> (Name, email, country, timezone, preferences)</td>
                <td><span className="status-tag deleted">Deleted Immediately</span></td>
                <td>Supabase Database</td>
              </tr>
              <tr>
                <td><strong>Bills & Financial Records</strong> (Amounts, categories, due dates, notes)</td>
                <td><span className="status-tag deleted">Deleted Immediately</span></td>
                <td>Supabase Database</td>
              </tr>
              <tr>
                <td><strong>Receipt Images & Invoices</strong> (Scanned receipts, PDF attachments)</td>
                <td><span className="status-tag deleted">Purged Immediately</span></td>
                <td>Cloudflare R2 Storage</td>
              </tr>
              <tr>
                <td><strong>Digital Visiting Cards</strong> (Contact cards, QR codes)</td>
                <td><span className="status-tag deleted">Deleted Immediately</span></td>
                <td>Supabase Database</td>
              </tr>
              <tr>
                <td><strong>Push Tokens</strong> (FCM device registration IDs)</td>
                <td><span className="status-tag deleted">Invalidated Immediately</span></td>
                <td>Firebase Cloud Messaging</td>
              </tr>
              <tr>
                <td><strong>Encrypted Backups</strong> (Historical database snapshots)</td>
                <td><span className="status-tag backup">Overwritten within 30 days</span></td>
                <td>Encrypted Cloud Backup Rotation</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* FAQ Accordion */}
        <section className="delete-section-block">
          <h2>Frequently Asked Questions</h2>
          <div className="clean-faq-list">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`clean-faq-item ${openFaq === idx ? 'open' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-q-row">
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
                {openFaq === idx && (
                  <div className="faq-a-content">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
