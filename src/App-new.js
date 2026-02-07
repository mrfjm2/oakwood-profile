import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Construction from './pages/Construction';
import Design from './pages/Design';
import Joinery from './pages/Joinery';
import Boutique from './pages/Boutique';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/design" element={<Design />} />
          <Route path="/joinery" element={<Joinery />} />
          <Route path="/boutique" element={<Boutique />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
