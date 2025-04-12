import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/mockNodeData.json';

import RewardChart from '../components/RewardChart';
import RegretChart from '../components/RegretChart';
import PromptViewer from '../components/PromptViewer';
import ConsensusViewer from '../components/ConsensusViewer';
import CritiqueViewer from '../components/CritiqueViewer';
import AnswerLengthChart from '../components/AnswerLengthChart';

export default function NodeView() {
  const { nodeId } = useParams();
  const node = data.nodes.find((n) => n.node_id === nodeId);

  console.log("URL param:", nodeId);
  console.log("Available node_ids:", data.nodes.map((n) => n.node_id));
  console.log("Matched node:", node);

  if (!node) {
    return (
      <div className="p-6 text-red-600 font-medium text-lg flex items-center gap-2">
        ❌ Node not found
      </div>
    );
  }

  const consensusData = data.consensus || {};
  const critiqueData = data.critiques || [];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">🔍 Node View: {nodeId}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RewardChart nodes={[node]} />
        <RegretChart nodes={[node]} />
      </div>

      <AnswerLengthChart nodes={[node]} />

      <PromptViewer answers={node.answers} />

      <ConsensusViewer answers={node.answers} consensus={consensusData} />

      <CritiqueViewer critiques={critiqueData} />
    </div>
  );
}
