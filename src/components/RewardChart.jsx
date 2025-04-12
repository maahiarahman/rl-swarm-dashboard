import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function RewardChart({ nodes, step }) {
  const chartData = nodes[0].rewards.map((_, i) => {
    const point = { step: i + 1 };
    let swarmSum = 0;
    nodes.forEach((node) => {
      point[node.node_id] = node.rewards[i];
      swarmSum += node.rewards[i];
    });
    point["Swarm Avg"] = swarmSum / nodes.length;
    return point;
  });

  const slicedData = chartData.slice(0, step);

  return (
    <div>
      <h2 className="font-semibold mb-2">Reward Over Time</h2>
      <LineChart width={400} height={250} data={slicedData}>
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
        <Line
          type="monotone"
          dataKey="Swarm Avg"
          stroke="#6366f1"
          strokeDasharray="5 5"
          dot={false}
        />
      </LineChart>
    </div>
  );
}
