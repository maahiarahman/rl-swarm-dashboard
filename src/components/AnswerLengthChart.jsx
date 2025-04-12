import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

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
    <>
      <h2 className="text-xl font-semibold text-[#f8dfc6] mb-2">📝 Average Answer Length</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="node" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Bar dataKey="avgLength" fill="#60a5fa" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-sm text-[#f8dfc6] mt-2">
        Measures verbosity — useful for analyzing communication patterns between agents.
      </p>
    </>
  );
}
