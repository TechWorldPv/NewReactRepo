import React from 'react';

import { Footer, Possibility, WhatGPT3, Header } from './containers';
import { CTA, Brand, Blog, Navbar, Article, Login, ForgotPassword, SignUp, Technologies } from './components';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import './App.css';
import Layout from '../src/Layout';
import HeaderFixed from './HeaderFixed';
const App = () => (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}> </Route>
    <Route path="/contact" element={<HeaderFixed><Article /></HeaderFixed>} />
    <Route path="/login" element={<HeaderFixed><Login /></HeaderFixed>} />
    <Route path="/forgot-password" element={<HeaderFixed><ForgotPassword /></HeaderFixed>} />
    <Route path="/services" element={<HeaderFixed><Possibility /></HeaderFixed>} />
    <Route path="/sign-up" element={<HeaderFixed><SignUp /></HeaderFixed>} />
    <Route path="/team" element={<HeaderFixed><CTA /></HeaderFixed>} />
    <Route path="/technologies" element={<HeaderFixed><Technologies /></HeaderFixed>} />
    <Route path="/blog" element={<HeaderFixed><Blog /></HeaderFixed>} />
 </Routes>
</BrowserRouter>
  
);

export default App;
