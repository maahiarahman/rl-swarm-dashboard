import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function RewardChart({ rewards }) {
  const data = rewards.map((value, index) => ({ step: index + 1, reward: value }));

  return (
    <div>
      <h2 className="font-semibold mb-2">Reward Over Time</h2>
      <LineChart width={400} height={250} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="step" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="reward" stroke="#10b981" />
      </LineChart>
    </div>
  );
}
