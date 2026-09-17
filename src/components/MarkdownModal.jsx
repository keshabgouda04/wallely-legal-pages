import React, { useState } from 'react';
import { X, Copy, Check, Download, FileCode, CheckCircle2 } from 'lucide-react';
import { RAW_MARKDOWN_POLICY } from '../data/policyMarkdown';

export default function MarkdownModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(RAW_MARKDOWN_POLICY);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([RAW_MARKDOWN_POLICY], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Wallely_Privacy_Policy.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-icon-badge">
              <FileCode size={20} className="text-indigo" />
            </div>
            <div>
              <h3 className="modal-title">Raw Markdown Policy Document</h3>
              <p className="modal-sub">Formatted ready for GitHub, Google Play Console, or App Store Connect</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-toolbar">
          <div className="modal-toolbar-info">
            <CheckCircle2 size={14} className="text-emerald" />
            <span>Complete legal policy ready for submission</span>
          </div>

          <div className="modal-toolbar-actions">
            <button className="btn-secondary" onClick={handleDownload}>
              <Download size={15} />
              <span>Download .md</span>
            </button>

            <button className="btn-primary" onClick={handleCopy}>
              {copied ? <Check size={15} /> : <Copy size={15} />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Markdown'}</span>
            </button>
          </div>
        </div>

        <div className="modal-body">
          <pre className="markdown-code-preview">
            <code>{RAW_MARKDOWN_POLICY}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
