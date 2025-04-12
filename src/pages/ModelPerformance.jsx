import React from 'react';
import data from '../data/mockNodeData.json';

export default function ModelPerformance() {
  const nodes = data.nodes || [];
  const critiques = data.critiques || [];

  const rewardStats = nodes.map((node) => {
    const avgReward = node.rewards.reduce((a, b) => a + b, 0) / node.rewards.length;
    const avgRegret = node.regret.reduce((a, b) => a + b, 0) / node.regret.length;
    const avgReasoningLen =
      node.answers.reduce((sum, a) => sum + a.reasoning.length, 0) / node.answers.length;

    const sent = critiques.filter((c) => c.from === node.node_id).length;
    const received = critiques.filter((c) => c.to === node.node_id).length;

    return {
      node: node.node_id,
      avgReward: avgReward.toFixed(3),
      avgRegret: avgRegret.toFixed(3),
      reasoningLen: Math.round(avgReasoningLen),
      critiquesSent: sent,
      critiquesReceived: received,
    };
  });

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-2">📈 Model Performance</h1>
      <p className="text-gray-600 mb-4">
        Overview of node behavior across training, reasoning, and collaboration.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow border rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2">Node</th>
              <th className="px-4 py-2">Avg Reward</th>
              <th className="px-4 py-2">Avg Regret</th>
              <th className="px-4 py-2">Reasoning Length</th>
              <th className="px-4 py-2">Critiques Sent</th>
              <th className="px-4 py-2">Critiques Received</th>
            </tr>
          </thead>
          <tbody>
            {rewardStats.map((row) => (
              <tr key={row.node} className="border-t">
                <td className="px-4 py-2 font-semibold">{row.node}</td>
                <td className="px-4 py-2 text-green-600">{row.avgReward}</td>
                <td className="px-4 py-2 text-red-600">{row.avgRegret}</td>
                <td className="px-4 py-2">{row.reasoningLen} chars</td>
                <td className="px-4 py-2">{row.critiquesSent}</td>
                <td className="px-4 py-2">{row.critiquesReceived}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
