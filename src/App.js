import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// MAIN PAGES
import Home from './components/Home';
import Checkout from './components/Checkout';
import OfferingsMangoes from './components/OfferingsMangoes';
import OfferingsOther from './components/OfferingsOther';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService/index.js';
import CursorTracker from './components/1_MediaAssets/Styles/CursorTracker';

import PlayerDetails from './components/Games/CatchGame/PlayerDetails.js';
import CatchGame from './components/Games/CatchGame/Game';

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
        <Route exact path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route exact path="/TermsOfService" element={<TermsOfService />} />

        <Route path="/PlayerDetails" element={<PlayerDetails />} />
        <Route path="/CatchGame" element={<CatchGame />} />
      </Routes>
    </Router>
  );
}

export default App;
