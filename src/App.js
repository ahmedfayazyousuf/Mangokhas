import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// MAIN PAGES
import Home from './components/Home';
import Navbar from './components/HeaderFooter/Navbar';
import CursorTracker from './components/1_MediaAssets/Styles/CursorTracker';

function App() {
  return (
    <Router>
      <Navbar />
      <CursorTracker />
      <Routes>
        {/* MAIN PAGES */}
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
