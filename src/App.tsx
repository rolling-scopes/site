// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Header/Navbar';
import { Main } from './components/Main/Main';
import { WhoWeAre } from './components/WhoWeAre/WhoWeAre';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <WhoWeAre />
    </div>
  );
}

export default App;
