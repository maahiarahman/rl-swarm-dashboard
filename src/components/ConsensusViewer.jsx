import React from 'react';

export default function ConsensusViewer({ answers, consensus }) {
  return (
    <div>
      <h2 className="font-semibold mb-2 mt-6">🧠 Swarm Consensus Comparison</h2>
      <div className="space-y-3">
        {answers.map((a, i) => {
          const consensusAnswer = consensus[a.prompt];
          const agreed = a.answer === consensusAnswer;
          return (
            <div key={i} className="p-3 rounded border bg-gray-50">
              <p><strong>Prompt:</strong> {a.prompt}</p>
              <p><strong>Node's Answer:</strong> {a.answer}</p>
              <p><strong>Swarm Consensus:</strong> {consensusAnswer}</p>
              <p className={agreed ? 'text-green-600' : 'text-red-600'}>
                {agreed ? '✅ Agreed with Swarm' : '❌ Disagreed with Swarm'}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
