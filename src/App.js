import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  const { pathname: slug } = useLocation();
  return (
    <div className="App">
      <Navbar slug={slug} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hero-details/:hero" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
