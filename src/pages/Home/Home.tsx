import React from 'react';

import { Navbar } from '../../components/Header/Navbar';
import { Main, About, Numbers, Pictures, School, Principles, Courses, Alumni } from './sections';

import './Home.scss';

export const Home: React.FC = () => (
  <div className="App">
    <Navbar />
    <Main />
    <About />
    <Numbers />
    {/* <RSPlaces /> */}
    <Pictures />
    <School />
    <Principles />
    <Courses />
    <Alumni />
    {/* <Events /> */}
    {/* <Speakers /> */}
    {/* <Merch /> */}
    {/* <Community /> */}
    {/* <Contribute /> */}
    {/* <Support /> */}
    {/* <Partnered /> */}
    {/* <Footer /> */}
  </div>
);
