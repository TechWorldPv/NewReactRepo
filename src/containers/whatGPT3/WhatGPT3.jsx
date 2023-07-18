import React from 'react';
import Feature from '../../components/login/Login';

import {bookSelf,
  box,
  chair,
  cloud,
  cup,
  monitor,
  mug,
  tissue,
  waterBottle,
  flowertop,
  wifi,
  circleShape,
  serviceMainPic,
  table,
  headphone } from './imports';


const WhatGPT3 = () => (
<div class="services-area ptb-80 bg-f7fafd">
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-lg-6 col-md-12 services-content">
                            <div class="section-title">
                                <h2>Cloud Hosting Services</h2>
                                <div class="bar"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>                                        Cloud databases</div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>                                        Website hosting</div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>                                        File storage</div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>                                        Forex trading</div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>                                        File backups</div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>                                        Remote desktop</div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>                                        Email servers</div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>                                        Hybrid cloud</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 services-right-image">
                                <img src={bookSelf} class="animate__animated animate__fadeInDown animate__delay-0.2s" alt="book-self" />
                                <img src={box} class="animate__animated animate__fadeInUp animate__delay-0.2s" data-wow-delay="0.6s" alt="box" />
                                <img src={chair} class="animate__animated animate__fadeInLeft animate__delay-0.2s" alt="chair" />
                                <img src={cloud} class="animate__animated animate__zoomIn animate__delay-0.2s" alt="cloud" />
                                <img src={cup} class="animate__animated animate__bounceIn animate__delay-0.2s" alt="cup" />
                                <img src={flowertop} class="animate__animated animate__fadeInDown animate__delay-0.2s" alt="flower" />
                                <img src={headphone} class="animate__animated animate__zoomIn animate__delay-0.2s" alt="head-phone" />
                                <img src={monitor} class="animate__animated animate__fadeInUp animate__delay-0.2s" alt="monitor" />
                                <img src={mug} class="animate__animated animate__rotateIn animate__delay-0.2s" alt="mug" />
                                <img src={table} class="animate__animated animate__fadeInUp animate__delay-0.2s" alt="table" />
                                <img src={tissue} class="animate__animated animate__zoomIn animate__delay-0.2s" alt="tissue" />
                                <img src={waterBottle} class="animate__animated animate__fadeInUp animate__delay-0.2s" alt="water-bottle" />
                                <img src={wifi} class="animate__animated animate__fadeInLeft animate__delay-0.2s" data-wow-delay="0.6s" alt="wifi" />
                                <img src={circleShape} class="bg-image rotateme" alt="shape" />
                                <img src={serviceMainPic} class="animate__animated animate__fadeInUp animate__delay-0.2s" alt="main-pic" /></div>
                    </div>
                </div>
            </div>
);

export default WhatGPT3;
