import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import NodeView from './pages/NodeView';
import ModelPerformance from './pages/ModelPerformance';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/node-view/:nodeId" element={<NodeView />} />
            <Route path="/model-performance" element={<ModelPerformance />} />
            <Route path="*" element={<div className="p-6 text-red-500">404 – Not Found</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
