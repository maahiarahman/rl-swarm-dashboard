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
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold text-[#f8dfc6] mb-2">📈 Model Performance</h1>
      <p className="text-gray-400 max-w-3xl">
        Overview of node behaviour across training, reasoning, and collaboration. This table tracks key performance indicators including average reward and regret, reasoning verbosity, and peer critique exchange — essential for understanding how well each agent contributes to and learns from the swarm.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#111] text-[#f3ede8] border border-gray-700 rounded-md">
          <thead className="bg-[#1a1a1a] text-[#f8dfc6]">
            <tr>
              <th className="px-4 py-2 text-left">Node</th>
              <th className="px-4 py-2 text-left">Avg Reward</th>
              <th className="px-4 py-2 text-left">Avg Regret</th>
              <th className="px-4 py-2 text-left">Reasoning Length</th>
              <th className="px-4 py-2 text-left">Critiques Sent</th>
              <th className="px-4 py-2 text-left">Critiques Received</th>
            </tr>
          </thead>
          <tbody>
            {rewardStats.map((row) => (
              <tr key={row.node} className="border-t border-gray-700">
                <td className="px-4 py-2 font-semibold">{row.node}</td>
                <td className="px-4 py-2 text-green-500">{row.avgReward}</td>
                <td className="px-4 py-2 text-red-500">{row.avgRegret}</td>
                <td className="px-4 py-2">{row.reasoningLen} chars</td>
                <td className="px-4 py-2">{row.critiquesSent}</td>
                <td className="px-4 py-2">{row.critiquesReceived}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pt-6 border-t border-gray-700">
        <h2 className="text-xl font-semibold text-[#f8dfc6] mb-3">📌 Summary Insights</h2>
        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
          <li><strong>node_1</strong> shows slightly higher reward but also more regret, suggesting effective strategies with potential inconsistencies in optimal alignment.</li>
          <li><strong>node_2</strong> performs more conservatively with slightly lower reward but better alignment — evidenced by the lowest average regret.</li>
          <li>Both nodes maintain strong engagement in the critique exchange, indicating collaborative training dynamics typical of well-coordinated swarm setups.</li>
        </ul>
      </div>

      <div className="mt-8 p-6 bg-[#111] border border-gray-800 rounded-md shadow-md">
        <h3 className="text-lg font-bold text-[#f8dfc6] mb-2">🎯 Final Thoughts</h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          This comparative performance overview gives you a bird’s-eye view of agent efficiency, cooperation, and reasoning tendencies. It complements the individual node breakdown by providing the context needed to spot behavioural trends and imbalances across the swarm.
          When working with decentralised learning architectures like Gensyn’s, insights from this page can guide model calibration, reward signal tuning, and adaptive critique mechanics — helping you build smarter, more coordinated systems.
        </p>
      </div>
    </div>
  );
}
