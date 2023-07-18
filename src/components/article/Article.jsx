import React from 'react';
// import './article.css';
import '../../_next/static/css/33da62df4235767d11e3.css';
import { shape1, shape2, shape3, shape4, shape5, contact } from './imports';
import { Footer } from '../../containers';
import Navbar from '../navbar/Navbar';

const Article = ({ imgUrl, date, text }) => (
  <div>
                <div className="contact-info-area ptb-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>
                                <h3>Mail Here</h3>
                                <p><a href="/cdn-cgi/l/email-protection#0c6d686165624c7f786d7e787c226f6361"><span className="__cf_email__" data-cfemail="19787d747077596a6d786b6d69377a7674">[email&#160;protected]</span></a></p>
                                <p><a href="/cdn-cgi/l/email-protection#274e494148675453465553570944484a"><span className="__cf_email__" data-cfemail="0b62656d644b787f6a797f7b25686466">[email&#160;protected]</span></a></p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
                                <h3>Visit Here</h3>
                                <p>27 Division St, New York, NY 10002, United States of America</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
                                <h3>Call Here</h3>
                                <p><a href="tel:+1234567890">+123 456 7890</a></p>
                                <p><a href="tel:+2414524526">+241 452 4526</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.183613366869!2d-73.99830468463497!3d40.71397427933168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a263f3910db%3A0xd6e6cdf32a6b11b1!2s27%20Division%20St%2C%20New%20York%2C%20NY%2010002%2C%20USA!5e0!3m2!1sen!2sbd!4v1614260467637!5m2!1sen!2sbd"
                width="100%" height="450" loading="lazy"></iframe>
                 <div className="contact-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>Get In Touch With Us</h2>
                        <div className="bar"></div>
                        <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12"><img src={contact} alt="image" /></div>
                        <div className="col-lg-6 col-md-12">
                            <form id="contactForm">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group"><input type="text" name="name" placeholder="Your Name" className="form-control" value="" />
                                            <div className="invalid-feedback"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group"><input type="text" name="email" placeholder="Your email address" className="form-control" value="" />
                                            <div className="invalid-feedback" ></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group"><input type="text" name="number" placeholder="Your phone number" className="form-control" value="" />
                                            <div className="invalid-feedback" ></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group"><input type="text" name="subject" placeholder="Your Subject" className="form-control" value="" />
                                            <div className="invalid-feedback" ></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group"><textarea name="text" cols="30" rows="5" placeholder="Write your message..." className="form-control"></textarea>
                                            <div className="invalid-feedback" ></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-sm-12"><button type="submit" className="btn btn-primary">Send Message</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
);

export default Article;
