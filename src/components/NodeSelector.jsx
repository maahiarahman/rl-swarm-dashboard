import React from 'react';

export default function NodeSelector({ nodes, onSelect }) {
  return (
    <select onChange={(e) => onSelect(e.target.value)} className="p-2 border rounded">
      {nodes.map((node) => (
        <option key={node.node_id} value={node.node_id}>
          {node.node_id}
        </option>
      ))}
    </select>
  );
}
