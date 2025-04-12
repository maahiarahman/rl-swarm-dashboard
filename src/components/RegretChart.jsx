import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function RegretChart({ nodes }) {
  const chartData = nodes[0].regret.map((_, i) => {
    const point = { step: i + 1 };
    nodes.forEach((node) => {
      point[node.node_id] = node.regret[i];
    });
    return point;
  });

  return (
    <div>
      <h2 className="font-semibold mb-2">Relative Regret Over Time</h2>
      <LineChart width={400} height={250} data={chartData}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="step" />
        <YAxis />
        <Tooltip />
        {nodes.map((node) => (
          <Line
            key={node.node_id}
            type="monotone"
            dataKey={node.node_id}
            stroke="#ef4444"
            dot={{ r: 3 }}
          />
        ))}
      </LineChart>
    </div>
  );
}
