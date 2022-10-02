import React from 'react';
import './App.css';
import api from './api/api';

function App() {
  api.fetchHeroes();
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
