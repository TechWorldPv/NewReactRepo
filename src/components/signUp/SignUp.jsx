import React from 'react';
import { Footer } from '../../containers';
import Navbar from '../navbar/Navbar';
import '../../_next/static/css/33da62df4235767d11e3.css';
import { logo } from './imports';

const SignUp = () => (
  <div>
    <div class="ptb-80">
                <div class="container">
                    <div class="auth-form">
                        <div class="auth-head"><a href="/it-startup/"><img src= {logo}/></a>
                            <p>Create a new account</p>
                        </div>
                        <form>
                            <div class="mb-3"><label class="form-label">Email</label><input type="email" class="form-control" id="exampleInputEmail1" /></div>
                            <div class="mb-3"><label class="form-label">Password</label><input type="password" class="form-control" id="exampleInputPassword1" /></div>
                            <div class="mb-3"><label class="form-label">Confirm Password</label><input type="password" class="form-control" id="ConfirmPassword" /></div><button type="submit" class="btn btn-primary">Sign Up</button></form>
                        <div class="foot">
                            <p>Already have an account yet? <a href="/login/">Login</a></p>
                        </div>
                    </div>
                </div>
            </div>
  </div>
);

export default SignUp;
