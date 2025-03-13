import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  BodyBase,
  BodyBottom,
  BodyLeft,
  BodyRight,
  Footer,
  Header,
} from './components';
import { GameList, HomePage, MatchPage } from './pages';

const App = () => {
  return (
    <div className="bg-gray-200">
      <Router>
        <Header />
        <div className="flex w-full min-h-screen max-w-7xl overflow-hidden mx-auto">
          <BodyLeft />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/match/:sportId" element={<HomePage />} />
            <Route path="/match/99998" element={<GameList />} />
            <Route path="/match/:sportId/:matchId" element={<MatchPage />} />
          </Routes>
          <BodyRight />
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
