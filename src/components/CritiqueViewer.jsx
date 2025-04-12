import React from 'react';

export default function CritiqueViewer({ critiques }) {
  return (
    <div>
      <h2 className="font-semibold mb-2 mt-4">💬 Peer Critiques (Stage 2)</h2>
      <div className="space-y-3">
        {critiques.map((c, i) => (
          <div key={i} className="p-3 rounded border bg-blue-50">
            <p><strong>From:</strong> {c.from}</p>
            <p><strong>To:</strong> {c.to}</p>
            <p><strong>Comment:</strong> {c.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
