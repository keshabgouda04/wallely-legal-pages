import React from 'react';
import { PERMISSIONS_DATA } from '../data/policyData';

export default function PermissionsGrid() {
  return (
    <div className="permissions-table-wrap">
      <table className="clean-table">
        <thead>
          <tr>
            <th>Permission</th>
            <th>Purpose</th>
            <th>Usage & Justification</th>
          </tr>
        </thead>
        <tbody>
          {PERMISSIONS_DATA.map((perm, index) => (
            <tr key={index}>
              <td className="permission-name-cell">
                <code>{perm.permission}</code>
              </td>
              <td className="permission-purpose-cell">
                <strong>{perm.purpose}</strong>
              </td>
              <td className="permission-justification-cell">
                {perm.justification}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
