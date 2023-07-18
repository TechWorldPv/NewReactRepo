import React from 'react';
import { agencyImage1,
  agencyImage2,
  agencyImage3,
  agencyImage4,
  agencyImage5,
  agencyImage6,
  shape1,
  shape2,
  shape3,
  shape4 } from './imports';

const Possibility = () => (
  <div class="agency-services-area pt-80 pb-50">
  <div class="container">
      <div class="section-title st-fs-28"><span class="sub-title">Our Solutions</span>
          <h2>Our Services</h2>
          <div class="bar"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div class="row justify-content-center">
          <div class="col-lg-4 col-sm-6 col-md-6">
              <div class="agency-services-box"><img src= {agencyImage1} alt="image" />
                  <div class="content">
                      <h3><a href="/service-details/">IT Professionals</a></h3><a class="read-more-btn" href="/service-details/">Read More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg></a></div>
              </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-md-6">
              <div class="agency-services-box"><img src ={agencyImage2} alt="image" />
                  <div class="content">
                      <h3><a href="/service-details/">Software Engineers</a></h3><a class="read-more-btn" href="/service-details/">Read More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg></a></div>
              </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-md-6">
              <div class="agency-services-box"><img src={agencyImage3} alt="image" />
                  <div class="content">
                      <h3><a href="/service-details/">Web Development</a></h3><a class="read-more-btn" href="/service-details/">Read More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg></a></div>
              </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-md-6">
              <div class="agency-services-box"><img src={agencyImage4} alt="image" />
                  <div class="content">
                      <h3><a href="/service-details/">SEO &amp; Content</a></h3><a class="read-more-btn" href="/service-details/">Read More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg></a></div>
              </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-md-6">
              <div class="agency-services-box"><img src={agencyImage5} alt="image" />
                  <div class="content">
                      <h3><a href="/service-details/">Digital Marketing</a></h3><a class="read-more-btn" href="/service-details/">Read More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg></a></div>
              </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-md-6">
              <div class="agency-services-box"><img src={agencyImage6} alt="image" />
                  <div class="content">
                      <h3><a href="/service-details/">Data Analysts</a></h3><a class="read-more-btn" href="/service-details/">Read More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg></a></div>
              </div>
          </div>
      </div>
  </div>
  <div class="shape2 rotateme"><img src = {shape2}alt="shape" /></div>
  <div class="shape3"><img src={shape3} alt="shape" /></div>
  <div class="shape4"><img src={shape4} alt="shape" /></div>
  <div class="shape6 rotateme"><img src = {shape4} alt="shape" /></div>
  <div class="shape7"><img src={shape4} alt="shape" /></div>
  <div class="shape8 rotateme"><img src={shape2}alt="shape" /></div>
</div>
);

export default Possibility;
