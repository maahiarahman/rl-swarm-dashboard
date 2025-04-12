import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function AnswerLengthChart({ nodes, step }) {
  const chartData = nodes.map((node) => {
    const lengths = node.answers.map((a) => a.answer.length);
    const sliced = step ? lengths.slice(0, step) : lengths;
    const avgLength = sliced.reduce((sum, len) => sum + len, 0) / sliced.length || 0;

    return {
      node: node.node_id,
      avgLength: Math.round(avgLength),
    };
  });

  return (
    <div>
      <h2 className="font-semibold mb-2">📝 Average Answer Length</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="node" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="avgLength" fill="#60a5fa" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
