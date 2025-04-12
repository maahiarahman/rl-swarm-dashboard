import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function AnswerLengthChart({ nodes }) {
  const chartData = nodes.map((node) => {
    const avgLength =
      node.answers.reduce((sum, a) => sum + a.answer.length, 0) / node.answers.length;
    return {
      node: node.node_id,
      avgLength: Math.round(avgLength)
    };
  });

  return (
    <div>
      <h2 className="font-semibold mb-2">📝 Average Answer Length</h2>
      <BarChart width={400} height={250} data={chartData}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="node" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="avgLength" fill="#60a5fa" />
      </BarChart>
    </div>
  );
}
