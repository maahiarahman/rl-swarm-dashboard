// FILE: src/components/ConsensusDriftChart.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function ConsensusDriftChart({ consensusHistory }) {
  const data = consensusHistory.map((entry, index) => ({
    step: index + 1,
    consensusAgreement: entry.agreementScore, // percent agreement in swarm
  }));

  return (
    <div className="card">
      <h2>📊 Consensus Drift</h2>
      <LineChart width={400} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="step" />
        <YAxis domain={[0, 100]} tickFormatter={(val) => `${val}%`} />
        <Tooltip />
        <Line type="monotone" dataKey="consensusAgreement" stroke="#a78bfa" dot={{ r: 3 }} />
      </LineChart>
    </div>
  );
}
