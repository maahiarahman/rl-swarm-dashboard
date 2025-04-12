import React from 'react';

export default function CritiqueViewer({ critiques }) {
  return (
    <div>
      <h2 className="font-semibold mb-2 mt-6">🤝 Swarm Critique Network</h2>
      <div className="space-y-3">
        {critiques.map((c, i) => (
          <div
            key={i}
            className="p-3 rounded border bg-gray-100 flex justify-between items-center"
          >
            <p><strong>{c.from}</strong> critiqued <strong>{c.to}</strong></p>
            <p className="text-xl">{c.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
