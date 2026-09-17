import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Trash2, 
  Cpu
} from 'lucide-react';
import { QUICK_HIGHLIGHTS } from '../data/policyData';

const iconMap = {
  ShieldCheck,
  Lock,
  Trash2,
  Cpu
};

export default function ExecutiveSummary() {
  return (
    <section className="executive-summary-section">
      <h2 className="summary-heading">Privacy at a Glance</h2>
      
      <div className="highlights-grid">
        {QUICK_HIGHLIGHTS.map((item, index) => {
          const IconComp = iconMap[item.icon] || ShieldCheck;
          return (
            <div key={index} className="highlight-card">
              <div className="highlight-icon">
                <IconComp size={18} />
              </div>
              <h3 className="highlight-title">{item.title}</h3>
              <p className="highlight-desc">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
