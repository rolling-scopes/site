import React from 'react';

import { Navbar } from '../../components/Header/Navbar';
import { Main } from './sections/Main/Main';

import './Home.scss';

export const Home: React.FC = () => (
  <div className="App">
    <Navbar />
    <Main />
    {/* <About />
  <RSNumbers />
  <RSPlaces />
  <RSPictures />
  <RSSchool />
  <RSSchoolPrinciples />
  <OurAlumni />
  <Events />
  <Speakers />
  <Merch />
  <Community />
  <Contribute />
  <Support />
  <Partnered />
  <Footer /> */}
  </div>
);
