import { Link, useLocation } from 'react-router-dom';
import data from '../data/mockNodeData.json';

export default function Sidebar() {
  const location = useLocation();
  const firstNode = data.nodes[0]?.node_id || 'node_1';

  const navItems = [
    { label: '🧠 Dashboard', to: '/' },
    { label: '🔍 Node View', to: `/node-view/${firstNode}` },
    { label: '📈 Model Performance', to: '/model-performance' },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-6 space-y-6">
      <h1 className="text-2xl font-bold">RL Swarm</h1>
      <nav className="space-y-3">
        {navItems.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            className={`block px-2 py-1 rounded ${
              location.pathname.startsWith(to) ? 'bg-gray-700' : 'hover:bg-gray-800'
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
