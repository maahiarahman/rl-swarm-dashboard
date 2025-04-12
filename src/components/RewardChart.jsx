import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function RewardChart({ nodes }) {
  const chartData = nodes[0].rewards.map((_, i) => {
    const point = { step: i + 1 };
    nodes.forEach((node) => {
      point[node.node_id] = node.rewards[i];
    });
    return point;
  });

  return (
    <div>
      <h2 className="font-semibold mb-2">Reward Over Time</h2>
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
            stroke="#10b981"
            dot={{ r: 3 }}
          />
        ))}
      </LineChart>
    </div>
  );
}
