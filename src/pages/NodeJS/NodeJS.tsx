import React from 'react';
import { Navbar } from '../../components';
import { Main } from './sections';
import { Audience } from './sections/Audience';

export const NodeJS: React.FC = () => (
  <div className="App">
    <Navbar />
    <Main />
    <Audience />
  </div>
);
