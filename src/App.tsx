// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Header/Navbar';
import { Main } from './components/Main/Main';
import { About } from './components/About/About';
import { RSNumbers } from './components/RSNumbers/RSNumbers';
import { RSPlaces } from './components/RSPlaces/RSPlaces';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <RSNumbers />
      <RSPlaces />
    </div>
  );
}

export default App;
