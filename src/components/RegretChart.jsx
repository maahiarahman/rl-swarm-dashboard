import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

export default function RegretChart({ nodes, step }) {
  const chartData = nodes[0]?.regret.map((_, i) => {
    const point = { step: i + 1 };
    let swarmSum = 0;
    nodes.forEach((node) => {
      point[node.node_id] = node.regret[i];
      swarmSum += node.regret[i];
    });
    point["Swarm Avg"] = swarmSum / nodes.length;
    return point;
  }) || [];

  const slicedData = step ? chartData.slice(0, step) : chartData;

  return (
    <>
      <h2 className="text-xl font-semibold text-[#f8dfc6] mb-2">Relative Regret Over Time</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={slicedData}>
          <CartesianGrid stroke="#444" />
          <XAxis dataKey="step" stroke="#ccc" />
          <YAxis stroke="#ccc" />
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
          <Line
            type="monotone"
            dataKey="Swarm Avg"
            stroke="#fbbf24"
            strokeDasharray="5 5"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-sm text-[#f8dfc6] mt-2">
        Visualizes how far each agent’s decision deviates from the best possible action. A decreasing trend shows smarter decisions over time. Lower is better!
      </p>
    </>
  );
}
