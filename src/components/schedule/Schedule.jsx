import React from 'react';
import { Footer } from '../../containers';
import Navbar from '../navbar/Navbar';
import '../../_next/static/css/33da62df4235767d11e3.css';
import { logo } from './imports';

const load = () => {
    Calendly.initPopupWidget({url: 'https://calendly.com/patelshivangi0612/30min'});
}
const Schedule = () => (
  <div>
    <div className="ptb-80">
                <div className="container">
                <a class="btn btn-primary" onClick={load()}>Get Started</a>
                {/* window.onload = function() { Calendly.initBadgeWidget({ url: 'https://calendly.com/patelshivangi0612/30min', text: 'Schedule Call', color: '#c679e3', textColor: '#ffffff', branding: true }); } */}
                </div>
            </div>
  </div>
);

export default Schedule;
