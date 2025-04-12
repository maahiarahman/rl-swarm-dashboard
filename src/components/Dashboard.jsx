import React, { useState } from 'react';
import data from '../data/mockNodeData.json';
import NodeSelector from './NodeSelector';
import RewardChart from './RewardChart';
import RegretChart from './RegretChart';
import PromptViewer from './PromptViewer';

export default function Dashboard() {
  const [selectedNodeIds, setSelectedNodeIds] = useState([data.nodes[0].node_id]);

  const handleToggle = (nodeId) => {
    setSelectedNodeIds((prev) =>
      prev.includes(nodeId)
        ? prev.filter((id) => id !== nodeId)
        : [...prev, nodeId]
    );
  };

  const selectedNodes = data.nodes.filter((n) =>
    selectedNodeIds.includes(n.node_id)
  );

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">🧠 RL Swarm Dashboard</h1>
      <NodeSelector
        nodes={data.nodes}
        selectedNodes={selectedNodeIds}
        onToggle={handleToggle}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RewardChart nodes={selectedNodes} />
        <RegretChart nodes={selectedNodes} />
      </div>

      {selectedNodes[0] && <PromptViewer answers={selectedNodes[0].answers} />}
    </div>
  );
}
