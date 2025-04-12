import React, { useState, useEffect } from 'react';
import data from '../data/mockNodeData.json';

import NodeSelector from '../components/NodeSelector';
import RewardChart from '../components/RewardChart';
import RegretChart from '../components/RegretChart';
import AnswerLengthChart from '../components/AnswerLengthChart';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [selectedNodeIds, setSelectedNodeIds] = useState([data.nodes[0].node_id]);
  const [step, setStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setStep((prev) => {
          const maxSteps = selectedNodes[0]?.rewards.length || 5;
          if (prev >= maxSteps) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 800);
    }
    return () => clearInterval(interval);
  }, [isPlaying, selectedNodes]);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">🧠 RL Swarm Dashboard</h1>

      <NodeSelector
        nodes={data.nodes}
        selectedNodes={selectedNodeIds}
        onToggle={handleToggle}
      />

      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsPlaying((prev) => !prev)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {isPlaying ? '⏸ Pause' : '▶️ Play Training'}
        </button>
        <span className="text-gray-700">Step: {step}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RewardChart nodes={selectedNodes} step={step} />
        <RegretChart nodes={selectedNodes} step={step} />
      </div>

      <AnswerLengthChart nodes={selectedNodes} step={step} />

      <div className="border-t pt-4 mt-4">
        <h2 className="text-lg font-semibold mb-2">Explore Individual Nodes</h2>
        <div className="flex flex-wrap gap-4">
          {data.nodes.map((node) => (
            <button
              key={node.node_id}
              onClick={() => navigate(`/node-view/${node.node_id}`)}
              className="text-blue-600 underline text-sm"
            >
              View {node.node_id}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
