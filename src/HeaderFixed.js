import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar, Article } from './components';
// import './App.css';

const HeaderFixed = ({ children }) => (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );

export default HeaderFixed;
