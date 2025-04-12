import React from 'react';

export default function PromptViewer({ answers }) {
  return (
    <div>
      <h2 className="font-semibold mb-2 mt-4">Prompt History</h2>
      <div className="space-y-3">
        {answers.map((a, i) => (
          <div key={i} className="p-3 rounded border bg-gray-50">
            <p><strong>Prompt:</strong> {a.prompt}</p>
            <p><strong>Answer:</strong> {a.answer}</p>
            <p className={a.correct ? 'text-green-600' : 'text-red-600'}>
              {a.correct ? '✅ Correct' : '❌ Incorrect'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
