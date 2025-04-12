import React from 'react';

export default function NodeSelector({ nodes, selectedNodes, onToggle }) {
  return (
    <div className="space-y-1">
      {nodes.map((node) => (
        <label key={node.node_id} className="block">
          <input
            type="checkbox"
            checked={selectedNodes.includes(node.node_id)}
            onChange={() => onToggle(node.node_id)}
            className="mr-2"
          />
          {node.node_id}
        </label>
      ))}
    </div>
  );
}
