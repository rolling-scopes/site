import React, { ReactNode } from 'react';
import { Partnered } from '../../pages/Home/sections';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="App">
      <Navbar />
      {children}
      <Partnered />
      <Footer />
    </div>
  );
};
