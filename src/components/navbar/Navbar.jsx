import React, { useContext } from 'react';
import { logo } from './imports';
import { AppContext } from "../../Context";
import '../../_next/static/css/33da62df4235767d11e3.css';

const Navbar = () => {
    const appContext = useContext(AppContext);
    const { setModalPopup } = appContext || {};

    const handleButtonClick = () => {
        if (setModalPopup) {
            setModalPopup(true);
          }
    };

    return (

        <header id="header" className="headroom  is-sticky">
        <div className="startp-nav">
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-light"><a className="navbar-brand" href="/it-startup/"><img src= {logo} alt="logo"/></a><button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation"><span className="icon-bar top-bar"></span><span className="icon-bar middle-bar"></span><span className="icon-bar bottom-bar"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="/#">Home <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="/services">Services <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="/technologies">Technologies <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="/blog">Blog <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="/team">Team <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="/#">About Us <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="/contact/">Contact</a></li>
                        </ul>
                    </div>
                    <div className="others-option">
                        <button className="btn btn-primary"  onClick={handleButtonClick}>Schedule Call</button>
                    </div>
                   
                </nav>
            </div>
        </div>
        </header>
      );
};

export default Navbar;
