import React, { useEffect } from 'react';

const MeetTheTeam = () => {
  useEffect(() => {
    // Initialize AOS for animations
    import('aos').then(AOS => {
      AOS.init({ duration: 100 });
    });
  }, []);

  return (
    <div className="section tekup-section-padding2">
      <div className="container">
        <div className="tekup-section-title center">
          <h2>Meet the team behind Techverse</h2>
        </div>
        <div className="row">
          {/* Team Member 1 */}
          <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-duration="500">
            <div className="tekup-team-wrap">
              <div className="tekup-team-thumb">
                <img src="/assets/images/team/team1.png" alt="Marvin McKinney" />
                <div className="tekup-social-icon-box style-four position">
                  <ul>
                    <li><a href="https://www.linkedin.com/"><i className="ri-linkedin-fill"></i></a></li>
                    <li><a href="https://twitter.com/"><i className="ri-twitter-fill"></i></a></li>
                    <li><a href="https://www.instagram.com/"><i className="ri-instagram-fill"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="tekup-team-data">
                <a href="single-team.html">
                  <h5>Marvin McKinney</h5>
                </a>
                <p>CEO & Founder</p>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-duration="700">
            <div className="tekup-team-wrap">
              <div className="tekup-team-thumb">
                <img src="/assets/images/team/team2.png" alt="Sophia Rodriguez" />
                <div className="tekup-social-icon-box style-four position">
                  <ul>
                    <li><a href="https://www.linkedin.com/"><i className="ri-linkedin-fill"></i></a></li>
                    <li><a href="https://twitter.com/"><i className="ri-twitter-fill"></i></a></li>
                    <li><a href="https://www.instagram.com/"><i className="ri-instagram-fill"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="tekup-team-data">
                <a href="single-team.html">
                  <h5>Sophia Rodriguez</h5>
                </a>
                <p>Creative Director</p>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-duration="900">
            <div className="tekup-team-wrap">
              <div className="tekup-team-thumb">
                <img src="/assets/images/team/team3.png" alt="Alexander Cameron" />
                <div className="tekup-social-icon-box style-four position">
                  <ul>
                    <li><a href="https://www.linkedin.com/"><i className="ri-linkedin-fill"></i></a></li>
                    <li><a href="https://twitter.com/"><i className="ri-twitter-fill"></i></a></li>
                    <li><a href="https://www.instagram.com/"><i className="ri-instagram-fill"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="tekup-team-data">
                <a href="single-team.html">
                  <h5>Alexander Cameron</h5>
                </a>
                <p>Lead Developer</p>
              </div>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-duration="1100">
            <div className="tekup-team-wrap">
              <div className="tekup-team-thumb">
                <img src="/assets/images/team/team4.png" alt="Brooklyn Simmons" />
                <div className="tekup-social-icon-box style-four position">
                  <ul>
                    <li><a href="https://www.linkedin.com/"><i className="ri-linkedin-fill"></i></a></li>
                    <li><a href="https://twitter.com/"><i className="ri-twitter-fill"></i></a></li>
                    <li><a href="https://www.instagram.com/"><i className="ri-instagram-fill"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="tekup-team-data">
                <a href="single-team.html">
                  <h5>Brooklyn Simmons</h5>
                </a>
                <p>Product Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
