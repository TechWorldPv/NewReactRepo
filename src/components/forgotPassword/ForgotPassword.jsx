import React from 'react';
import { Footer } from '../../containers';
import Navbar from '../navbar/Navbar';
import '../../_next/static/css/33da62df4235767d11e3.css';
import { logo } from './imports';

const ForgotPassword = () => (
  <div>
    <div class="ptb-80">
                <div class="container">
                    <div class="auth-form">
                        <div class="auth-head"><a href="/it-startup/"><img src= {logo}/></a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                        <form>
                            <div class="mb-3"><label class="form-label">Email</label><input type="email" class="form-control" id="exampleInputEmail1" /></div><button type="submit" class="btn btn-primary">Reset Password</button></form>
                    </div>
                </div>
            </div>
  </div>
);

export default ForgotPassword;
