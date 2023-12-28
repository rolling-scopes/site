import React from 'react';
import { Navbar } from '../../components';
import { About, Main, Audience, Required } from './sections';
import Trainer from './sections/Trainer/Trainer';

export const NodeJS: React.FC = () => (
  <div className="App">
    <Navbar />
    <Main />
    <Audience />
    <About />
    <Required />
    <Trainer />
  </div>
);
