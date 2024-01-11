import React from 'react';
import { About, Main, Audience, Required, Trainer } from './sections';
import { Footer, Navbar } from '../../components';
import { Partnered } from '../commonSections';
import { useTitle } from '../../hooks';

export const NodeJS: React.FC = () => {
  useTitle('NodeJS Course');
  return (
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
};
