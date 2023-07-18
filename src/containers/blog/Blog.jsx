import React from 'react';
import Article from '../../components/article/Article';
import {  client1,
  client2,
  client3,
  client4,
  client5,shape1, shape2, shape3, shape4, shape5 } from './imports';
import '../../_next/static/css/33da62df4235767d11e3.css';
import { Technologies } from '../../components';
// import './blog.css';

const Blog = () => (
  <section className="feedback-area ptb-80 bg-f7fafd">
  <div className="container">
    <Technologies/>
</div>
<div className="shape1"><img src={shape1} alt="shape" /></div>
<div className="shape2 rotateme"><img src={shape2} alt="shape" /></div>
<div className="shape4"><img src={shape4} alt="shape" /></div>
<div className="shape5"><img src={shape5} alt="shape" /></div>
<div className="shape6 rotateme"><img src={shape4} alt="shape" /></div>
<div className="shape7"><img src={shape4} alt="shape" /></div>
<div className="shape8 rotateme"><img src={shape2}  alt="shape" /></div>
</section>
);

export default Blog;
