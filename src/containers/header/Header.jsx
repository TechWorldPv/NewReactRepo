import React, { useContext }  from 'react';
import { shape1, shape2, shape3, shape4, shape5, mainpic, man, code,carpet,
  bin,
  book,
  dekstop,
  dot,
  flowertop,
  flowertopbig,
  keyboard,
  pen,
  table,
  teacup,
  headphone } from './imports';
  import '../../_next/static/css/33da62df4235767d11e3.css';
import { Brand } from '../../components';
import { AppContext } from "../../Context";
import { PopupModal } from "react-calendly";


const Header = () => {
  const appContext = useContext(AppContext);
  
  const { setModalPopup, modalPopup } = appContext;

  const handleModalClose = () => {
    setModalPopup(false);
  };

  return (
    <div className="bigdata-analytics-banner">
      <div className="container">
        <div className="bigdata-analytics-content">
          <h1>Leading Software Development Company</h1>
          <p>
            We are one of the best offshore Software development companies in India with a team of certified developers that can cater to the requirements of clients, so they can focus on their business.
          </p>
          <button className="btn btn-primary" href ="/contact/">
            Get Started
          </button>
        </div>
        <PopupModal
          url="https://calendly.com/patelshivangi0612/30min"
          onModalClose={handleModalClose}
          open={modalPopup}
          rootElement={document.getElementById('root')}
        />
      </div>
      <Brand />
    </div>
  );
};


export default Header;
