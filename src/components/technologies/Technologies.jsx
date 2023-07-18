import React from 'react';
import { Footer } from '../../containers';
import Navbar from '../navbar/Navbar';
import '../../_next/static/css/33da62df4235767d11e3.css';
import { partner6, partner6H, physics, physicsHover, angular, angularHover, react, reactHover, aspnet,
     aspnetHover , azureHover, azure, netcoreHover, netcore, js, jsHover, officeHover, office, sql,
      bootstrapHover, bootstrap,sqlHover} from './imports';

const Technologies = () => (
    <div className="partner-area partner-section">
    <div className="container">
    <div class="section-title st-fs-28">
          <h2>Technologies</h2>
          <div class="bar"></div>
        
      </div>
        <div className="partner-inner">
            <div className="row justify-content-center">
            <div className="col-lg-2 col-md-3 col-6"><a href="#" target="_balnk"><img src={aspnet} alt="partner"/><img src={aspnetHover} alt="partner"/></a></div>
            <div className="col-lg-2 col-md-3 col-6"><a href="#" target="_balnk"><img src={netcore} alt="partner"/><img src={netcoreHover} alt="partner"/></a></div>    
                <div className="col-lg-2 col-md-3 col-6"><a href="#" target="_balnk"><img src={angular} alt="partner"/><img src={angularHover} alt="partner"/></a></div>
                <div className="col-lg-2 col-md-3 col-6"><a href="#" target="_balnk"><img src={react} alt="partner"/><img src={reactHover} alt="partner"/></a></div>
                <div className="col-lg-2 col-md-3 col-6"><a href="#" target="_balnk"><img src={azure} alt="partner"/><img src={azureHover} alt="partner"/></a></div>
                <div className="col-lg-2 col-md-3 col-6"><a href="#" target="_balnk"><img src={bootstrap} alt="partner"/><img src={bootstrapHover} alt="partner"/></a></div>
                <div className="col-lg-2 col-md-3 col-6"><a href="#" target="_balnk"><img src={js} alt="partner"/><img src={jsHover} alt="partner"/></a></div>
                <div className="col-lg-2 col-md-3 col-6"><a href="#" target="_balnk"><img src={office} alt="partner"/><img src={officeHover} alt="partner"/></a></div>
                <div className="col-lg-2 col-md-3 col-6"><a href="#" target="_balnk"><img src={sql} alt="partner"/><img src={sqlHover} alt="partner"/></a></div>
            </div>
        </div>
    </div>
    
</div>
);

export default Technologies;
