import React, {useState} from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar, Article } from './components';
import '../src/_next/static/css/33da62df4235767d11e3.css';
import Context from './Context';

const handleScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Layout = () => {

return (
<div id="__next">
        <div className="go-top active" onClick={handleScrollToTop}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg></div>
  
    <Context />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
    {/* <button onClick={handleScrollToTop} className="scroll-to-top-button">
      Scroll to Top
    </button> */}
    </div>
);
};

export default Layout;
