import React from 'react';
import { About, Main, Audience, Required, Trainer } from './sections';
import { Footer, Navbar } from '../../components';
import { Partnered } from '../commonSections';

export const NodeJS: React.FC = () => (
  <div className="App">
    <Navbar />
    <Main />
    <Audience />
    <About />
    <Required />
    <Trainer />
    <Partnered />
    <Footer />
  </div>
);
