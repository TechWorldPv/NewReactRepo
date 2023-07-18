import React from 'react';
// import './cta.css';
// import '../../_next/static/css/33da62df4235767d11e3.css';
import { team1, team2, team3, team4, team5 } from './imports';
import '../../_next/static/css/33da62df4235767d11e3.css';
const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];
const CTA = () => (
  <div className="team-area ptb-80 bg-f9f6f6">
                <div className="container">
                    <div class="section-title">
                        <h2>Our Awesome Team</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div class="owl-carousel team-slider owl-carousel owl-theme owl-theme-style owl-loaded owl-drag">
  <div className="owl-stage-outer">
    <div className="owl-stage owl-my1">
      <div className="owl-item cloned owl-my">
        <div className="single-team">
          <div className="team-image">
            <img src={team1} alt="image" />
            </div>
              <div className="team-content">
                <div className="team-info">
                  <h3>Josh Buttler</h3>
                  <span>CEO &amp; Founder</span>
                </div>
                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
              </div>
          </div>
        </div>
        <div className="owl-item cloned owl-my">
          <div className="single-team">
            <div className="team-image">
              <img src={team2}  alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Alex Maxwel</h3>
                <span>Marketing Manager</span>
              </div>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
        <div className="owl-item cloned owl-my">
          <div className="single-team">
            <div className="team-image">
              <img src={team3}  alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Janny Cotller</h3>
                <span>Web Developer</span>
              </div>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
        <div className="owl-item cloned owl-my">
          <div className="single-team">
            <div className="team-image">
              <img src={team4}  alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Jason Statham</h3>
                <span>UX/UI Designer</span>
              </div>
            
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
        <div className="owl-item cloned owl-my">
          <div className="single-team">
            <div className="team-image">
              <img src={team5}  alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Corey Anderson</h3>
                <span>Project Manager</span>
              </div>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
        <div className="owl-item active owl-my">
          <div className="single-team">
            <div className="team-image">
              <img src={team1}  alt="image"/>
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Josh Buttler</h3>
                <span>CEO &amp; Founder</span>
              </div>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
        <div className="owl-item active owl-my">
          <div className="single-team">
            <div className="team-image">
              <img src={team2}  alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Alex Maxwel</h3>
                <span>Marketing Manager</span>
              </div>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
        <div className="owl-item active owl-my">
          <div className="single-team">
            <div className="team-image">
              <img src={team3}  alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Janny Cotller</h3>
                <span>Web Developer</span>
              </div>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
        <div className="owl-item active owl-my">
          <div className="single-team">
            <div className="team-image">
              <img src={team4}  alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Jason Statham</h3>
                <span>UX/UI Designer</span>
              </div>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
        <div className="owl-item owl-my">
          <div className="single-team">
            <div className="team-image">
              <img src={team5}  alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Corey Anderson</h3>
                <span>Project Manager</span>
              </div>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
        <div className="owl-item owl-my">
          <div className="single-team">
            <div className="team-image">
              <img src={team1}  alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Josh Buttler</h3>
                <span>CEO &amp; Founder</span>
              </div>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
        <div className="owl-item owl-my">
          <div className="single-team">
            <div className="team-image">
              <img src={team2} alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Alex Maxwel</h3>
                <span>Marketing Manager</span>
              </div>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
        <div className="owl-item owl-my">
          <div className="single-team">
            <div className="team-image">
              <img src={team3}  alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Janny Cotller</h3>
                <span>Web Developer</span>
              </div>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
        <div className="owl-item owl-my">
          <div className="single-team">
            <div className="team-image">
              <img src={team4}  alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Jason Statham</h3>
                <span>UX/UI Designer</span>
              </div>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
        <div className="owl-item owl-my">
          <div className="single-team">
            <div className="team-image">
              <img src={team5}  alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Corey Anderson</h3>
                <span>Project Manager</span>
              </div>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
        <div className="owl-item cloned owl-my">
          <div className="single-team">
            <div className="team-image">
              <img src={team1}  alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Josh Buttler</h3>
                <span>CEO &amp; Founder</span>
              </div>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
        <div className="owl-item cloned owl-my">
          <div className="single-team">
            <div className="team-image">
              <img src={team2}  alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Alex Maxwel</h3>
                <span>Marketing Manager</span>
              </div>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
        <div className="owl-item cloned owl-my">
          <div className="single-team">
            <div className="team-image">
              <img src={team3}  alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Janny Cotller</h3>
                <span>Web Developer</span>
              </div>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
        <div className="owl-item cloned owl-my">
          <div className="single-team">
            <div className="team-image">
              <img src={team4}  alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Jason Statham</h3>
                <span>UX/UI Designer</span>
              </div>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
        <div className="owl-item cloned owl-my">
          <div className="single-team">
            <div className="team-image">
              <img src={team5} alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Corey Anderson</h3>
                <span>Project Manager</span>
              </div>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="owl-nav disabled">
      <div className="owl-prev">prev</div>
      <div className="owl-next">next</div>
    </div>
    <div className="owl-dots">
      <div className="owl-dot active">
        <span></span>
      </div>
      <div className="owl-dot">
        <span></span>
      </div>
      <div className="owl-dot">
        <span></span>
      </div>
    </div>
  </div>
</div>

);

export default CTA;
