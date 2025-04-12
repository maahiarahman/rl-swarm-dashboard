import React from 'react';

export default function ConsensusViewer({ answers, consensus }) {
  return (
    <div>
      <h2 className="font-semibold mb-2 mt-4">🗳️ Consensus Resolution (Voting Stage)</h2>
      <div className="space-y-3">
        {answers.map((a, i) => {
          const consensusAnswer = consensus[a.prompt];
          return (
            <div key={i} className="p-3 rounded border bg-white shadow-sm">
              <p><strong>Prompt:</strong> {a.prompt}</p>
              <p><strong>Your Answer:</strong> {a.answer}</p>
              <p>
                <strong>Consensus:</strong>{' '}
                {consensusAnswer ? (
                  <span className="text-green-600">{consensusAnswer}</span>
                ) : (
                  <span className="text-gray-500 italic">Not available</span>
                )}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
