import React from 'react';
import { Footer, Navbar } from '../../components';
import { Principles, Partnered } from '../commonSections';
import {
  About,
  Main,
  Courses,
  StudyPath,
  General,
  Mentors,
  Mentoring,
  Requirements
} from './sections';

export const CoursesPage: React.FC = () => (
  <div className="App">
    <Navbar />
    <Main />
    <About />
    <Principles />
    <Courses />
    <StudyPath />
    <General />
    <Mentors />
    <Mentoring />
    <Requirements />
    <Partnered />
    <Footer />
  </div>
);
