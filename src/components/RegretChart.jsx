import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function RegretChart({ regret }) {
  const data = regret.map((value, index) => ({ step: index + 1, regret: value }));

  return (
    <div>
      <h2 className="font-semibold mb-2">Relative Regret Over Time</h2>
      <LineChart width={400} height={250} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="step" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="regret" stroke="#f87171" />
      </LineChart>
    </div>
  );
}
