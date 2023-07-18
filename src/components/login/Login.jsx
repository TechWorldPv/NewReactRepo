import React from 'react';
import { Footer } from '../../containers';
import Navbar from '../navbar/Navbar';
import '../../_next/static/css/33da62df4235767d11e3.css';
import { logo } from './imports';

const load = () => {
    Calendly.showPopupWidget({url: 'https://calendly.com/patelshivangi0612/30min'});
}
const Login = () => (
  <div>ss
    <div className="ptb-80">
                <div className="container">
                <a class="btn btn-primary" onClick={load()}>Get Started</a>
                    {/* <div className="auth-form">
                        <div className="auth-head"><a href="/it-startup/"><img src={logo}/></a>
                            <p>Don&#x27;t have an account yet? <a href="/sign-up/">Sign Up</a></p>
                        </div>
                        <form>
                            <div className="mb-3"><label className="form-label">Email</label><input type="email" className="form-control" id="exampleInputEmail1" /></div>
                            <div className="mb-3"><label className="form-label">Password</label><input type="password" className="form-control" id="exampleInputPassword1" /></div>
                            <div className="mb-3">
                                <p><a href="/forgot-password/">Forgot Password</a></p>
                            </div><button type="submit" className="btn btn-primary">Login</button></form>
                        <div className="foot">
                            <p>or connect with</p>
                            <ul>
                                <li><a href="https://www.mail.com/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a></li>
                                <li><a href="https://www.facebook.com/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a></li>
                                <li><a href="https://www.twitter.com/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a></li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
  </div>
);

export default Login;
