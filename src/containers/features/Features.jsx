import React from 'react';
import Feature from '../../components/login/Login';
// import './features.css';
import { agencyIcon, agencyShape } from './imports';
import '../../_next/static/css/33da62df4235767d11e3.css';
const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];

const Features = () => (
  // <div className="gpt3__features section__padding" id="features">
  //   <div className="gpt3__features-heading">
  //     <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
  //     <p>Request Early Access to Get Started</p>
  //   </div>
  //   <div className="gpt3__features-container">
  //     {featuresData.map((item, index) => (
  //       <Feature title={item.title} text={item.text} key={item.title + index} />
  //     ))}
  //   </div>
  // </div>
  <div class="solutions-area ptb-80">
                <div class="container">
                    <div class="section-title st-fs-28"><span class="sub-title">What We Offer</span>
                        <h2>Our Featured Solutions</h2>
                        <div class="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-sm-6 col-md-6">
                            <div class="solutions-box">
                                <div class="icon"><i class="bx bx-landscape"></i><img src={agencyIcon} alt="image" /></div>
                                <h3><a href="/service-details/">Programmatic Advertising</a></h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore.</p><a class="learn-more-btn" href="/service-details/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg> Learn More</a></div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-md-6">
                            <div class="solutions-box">
                                <div class="icon"><i class="bx bx-bar-chart-alt"></i><img src={agencyIcon} alt="image" /></div>
                                <h3><a href="/service-details/">Strategy &amp; Research</a></h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore.</p><a class="learn-more-btn" href="/service-details/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg> Learn More</a></div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-md-6">
                            <div class="solutions-box">
                                <div class="icon"><i class="bx bx-devices"></i><img src={agencyIcon} alt="image" /></div>
                                <h3><a href="/service-details/">Design &amp; Development</a></h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore.</p><a class="learn-more-btn" href="/service-details/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg> Learn More</a></div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-md-6">
                            <div class="solutions-box">
                                <div class="icon"><i class="bx bx-chalkboard"></i><img src={agencyIcon} alt="image" /></div>
                                <h3><a href="/service-details/">Branding &amp; Marketing</a></h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore.</p><a class="learn-more-btn" href="/service-details/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg> Learn More</a></div>
                        </div>
                    </div>
                </div>
                <div class="shape9 slow mobile-dnone"><img src={agencyShape}  class="animate__animated animate__fadeInLeft animate__delay-0.7s" alt="image" /></div>
            </div>
);

export default Features;
