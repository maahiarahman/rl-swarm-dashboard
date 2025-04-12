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
    <div className="p-6 space-y-10">
      <h1 className="text-2xl font-bold text-[#f8dfc6]">🔍 Node View: {nodeId}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-semibold mb-1">Reward Over Time</h2>
          <RewardChart nodes={[node]} />
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold mb-1">Relative Regret Over Time</h2>
          <RegretChart nodes={[node]} />
        </div>
      </div>

      <p className="text-sm text-[#f8dfc6] max-w-5xl">
        This node’s learning trajectory can be understood through its reward and regret curves. In a distributed RL setup like swarm training (e.g., Gensyn’s architecture), agents evolve in parallel while sharing gradients or decision signals. A steadily increasing reward indicates effective local policy updates, while a declining regret suggests alignment with optimal global decisions—key indicators of efficient swarm coordination. High regret, conversely, may flag noise or local minima. Together, these curves give a microscopic view of how well an individual node learns and integrates with the broader agent swarm.
      </p>

      <div className="card">
        <h2 className="text-xl font-semibold mb-1">📝 Average Answer Length</h2>
        <AnswerLengthChart nodes={[node]} />
      </div>

      <p className="text-sm text-[#f8dfc6] max-w-5xl">
        Answer length helps illuminate the verbosity and reasoning depth of an agent’s response. In the context of collaborative multi-agent systems, longer responses may reflect more comprehensive reasoning chains or verbose strategies, while shorter ones can imply either high confidence or insufficient elaboration. Tracking this metric over time helps identify convergence patterns in communication habits, revealing whether nodes adopt more refined and cooperative discourse strategies as they learn from one another and align within the swarm. It’s particularly useful in evaluating how alignment and communication evolve jointly.
      </p>

      <PromptViewer answers={node.answers} />
      <ConsensusViewer answers={node.answers} consensus={consensusData} />
      <CritiqueViewer critiques={critiqueData} />
    </div>
  );
};