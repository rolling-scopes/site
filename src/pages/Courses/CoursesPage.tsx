import React from 'react';
import { Footer, Navbar } from '../../components';
import { Main } from './sections/Main';
import { About } from './sections/About';
import { Principles } from '../commonSections/Principles';
import Courses from './sections/Courses/Courses';

export const CoursesPage: React.FC = () => (
  <div className="App">
    <Navbar />
    <Main />
    <About />
    <Principles />
    <Courses />
    {/* <Footer /> */}
  </div>
);
