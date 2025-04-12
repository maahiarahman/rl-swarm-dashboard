import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-gray-50 p-6 min-h-screen">
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
