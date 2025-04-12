import React, { useState } from 'react';
import data from '../data/mockNodeData.json';
import NodeSelector from './NodeSelector';
import RewardChart from './RewardChart';
import RegretChart from './RegretChart';
import PromptViewer from './PromptViewer';

export default function Dashboard() {
  const [selectedNodeId, setSelectedNodeId] = useState(data.nodes[0].node_id);
  const selectedNode = data.nodes.find((n) => n.node_id === selectedNodeId);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">🧠 RL Swarm Dashboard</h1>
      <NodeSelector nodes={data.nodes} onSelect={setSelectedNodeId} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RewardChart rewards={selectedNode.rewards} />
        <RegretChart regret={selectedNode.regret} />
      </div>

      <PromptViewer answers={selectedNode.answers} />
    </div>
  );
}
