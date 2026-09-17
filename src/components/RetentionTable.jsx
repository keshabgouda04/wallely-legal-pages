import React from 'react';
import { DATA_RETENTION_TABLE } from '../data/policyData';

export default function RetentionTable() {
  return (
    <div className="retention-table-wrap">
      <table className="clean-table">
        <thead>
          <tr>
            <th>Data Category</th>
            <th>Retention Period</th>
            <th>Deletion & Purge Mechanism</th>
          </tr>
        </thead>
        <tbody>
          {DATA_RETENTION_TABLE.map((row, index) => (
            <tr key={index}>
              <td><strong>{row.category}</strong></td>
              <td><span className="clean-tag">{row.retentionPeriod}</span></td>
              <td>{row.deletionMechanism}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
