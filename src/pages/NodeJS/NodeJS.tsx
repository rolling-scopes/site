import React from 'react';
import { Navbar } from '../../components';
import { About, Main, Audience } from './sections';

export const NodeJS: React.FC = () => (
  <div className="App">
    <Navbar />
    <Main />
    <Audience />
    <About />
  </div>
);
