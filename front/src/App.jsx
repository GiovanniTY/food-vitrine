import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <div className="min-h-screen bg-[#f6f9fe] dark:bg-[#1A1C25] text-gray-900 dark:text-white">
            <Routes>
            </Routes>
          </div>
        </Router>
    </Suspense>
  );
}

export default App;

