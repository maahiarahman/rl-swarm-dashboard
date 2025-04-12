import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import NodeView from '../pages/NodeView';
import ModelPerformance from '../pages/ModelPerformance';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/node-view" element={<NodeView />} />
      <Route path="/model-performance" element={<ModelPerformance />} />
    </Routes>
  );
}
