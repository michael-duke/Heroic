import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path={location.pathname} element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
