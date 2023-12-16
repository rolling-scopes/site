import React from 'react';

import { Navbar, Footer } from '../../components';

import {
  Main,
  About,
  Numbers,
  Pictures,
  School,
  Courses,
  Alumni,
  Events,
  Merch,
  Community,
  Contribute,
  Speakers,
  Support,
  Places
} from './sections';

import './Home.scss';
import { Principles } from '../commonSections/Principles';
import { Partnered } from '../commonSections';

export const Home: React.FC = () => (
  <div className="App">
    <Navbar />
    <Main />
    <About />
    <Numbers />
    <Places />
    <Pictures />
    <School />
    <Principles />
    <Courses />
    <Alumni />
    <Events />
    <Speakers />
    <Merch />
    <Community />
    <Contribute />
    <Support />
    <Partnered />
    <Footer />
  </div>
);
