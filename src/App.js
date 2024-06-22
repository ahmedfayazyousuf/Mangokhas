import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// MAIN PAGES
import Home from './components/Home';
import Checkout from './components/Checkout';
import OfferingsMangoes from './components/OfferingsMangoes';
import OfferingsOther from './components/OfferingsOther';
import CursorTracker from './components/1_MediaAssets/Styles/CursorTracker';

function App() {
  return (
    <Router>
      <CursorTracker />
      <Routes>
        {/* MAIN PAGES */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Checkout" element={<Checkout />} />
        <Route exact path="/OfferingsOther" element={<OfferingsOther />} />
        <Route exact path="/OfferingsMangoes" element={<OfferingsMangoes />} />
      </Routes>
    </Router>
  );
}

export default App;
