import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import HomePage from './pages/Home/HomePage';
import Footer from './components/Footer';

function App() {
  return (
        <Router>
      
          <Navbar />
            <Routes>
            <Route path="/" element={<HomePage />} />
            </Routes>
            <Footer/>
  
        </Router>
  );
}

export default App;

