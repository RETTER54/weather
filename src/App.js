import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="soleil.png" className="App-logo" alt="logo" />
        
        <Weather/>
      </header>
    </div>
  );
}

export default App;
