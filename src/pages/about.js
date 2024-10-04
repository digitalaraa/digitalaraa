import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';

const About = () => {
  useEffect(() => {
    import('aos').then(AOS => {
      AOS.init();
    });
  }, []);

  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Us - Digital Araa</title>
        <link rel="shortcut icon" href="/assets/images/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/assets/images/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.css" />
        <link rel="stylesheet" href="/assets/css/aos.css" />
        <link rel="stylesheet" href="/assets/css/remixicon.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/app.min.css" />
      </Helmet>

      <Layout>
        <div className="tekup-breadcrumb" style={{ backgroundImage: 'url(/assets/images/breadcrumb/breadcrumb.png)' }}>
          <div className="container">
            <h1 className="post__title">About Us</h1>
            <nav className="breadcrumbs">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li aria-current="page">About Us</li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="section tekup-section-padding">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6" data-aos="fade-up" data-aos-duration="600">
                <div className="tekup-thumb">
                  <img src="/assets/images/v1/thumb1.png" alt="About Us Image" />
                  
                  <div className="tekup-thumb-card">
                    <img src="/assets/images/v3/Satisfaction.png" alt="Satisfaction" />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 offset-xl-1 col-lg-6 d-flex align-items-center">
                <div className="tekup-default-content">
                  <h2>Exclusive technology to provide IT solutions</h2>
                  <p>We are architects of innovation, trailblazers of technological advancement, and partners in your success. As a dynamic and forward-thinking organization, we strive to deliver exceptional technology solutions for modern businesses.</p>
                  <div className="tekup-icon-list">
                    <ul>
                      <li><i className="ri-check-line"></i>Easily Build Custom Reports And Dashboards</li>
                      <li><i className="ri-check-line"></i>Legacy Software Modernization</li>
                      <li><i className="ri-check-line"></i>Software For The Open Enterprise</li>
                    </ul>
                  </div>
                  <div className="tekup-extra-mt">
                    <Link className="tekup-default-btn" to="/about-us.html">More About <i className="ri-arrow-right-up-line"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section bg-light1 tekup-section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-lg-2" data-aos="fade-up" data-aos-duration={600}>
                <div className="tekup-thumb ml-30">
                  <img src="/assets/images/v3/thumb2.png" alt="" />
                  <div className="tekup-thumb-card right">
                    <img src="/assets/images/v3/project-done.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div className="tekup-default-content mr-60">
                  <h2>We are increasing business success with technology</h2>
                  <p>
                    We are architects of innovation, trailblazers of technological advancement, and partners in your success. As a dynamic and forward-thinking organization
                  </p>
                  <div className="tekup-extra-mt">
                    <div className="skillbar" data-percent={86}>
                      <p className="skillbar-lable">
                        <span className="skill-bar-title">Business Security</span>
                        <span className="skill-bar-percent" />
                      </p>
                      <div className="skillbar-box">
                        <p className="skillbar-bar" />
                      </div>
                    </div>
                    <div className="skillbar" data-percent={72}>
                      <p className="skillbar-lable">
                        <span className="skill-bar-title">Career Development</span>
                        <span className="skill-bar-percent" />
                      </p>
                      <div className="skillbar-box">
                        <p className="skillbar-bar" />
                      </div>
                    </div>
                    <div className="skillbar" data-percent={95}>
                      <p className="skillbar-lable">
                        <span className="skill-bar-title">Business Innovation</span>
                        <span className="skill-bar-percent" />
                      </p>
                      <div className="skillbar-box">
                        <p className="skillbar-bar" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section bg-accent tekup-section-padding3">
          <div id="tekup-counter" />
          <div className="container">
            <div className="tekup-counter-wrap4">
              <div className="tekup-counter-data4">
                <h2>
                  <span data-percentage={26} className="tekup-counter" />+
                </h2>
                <p>Years of Experience</p>
              </div>
              <div className="tekup-counter-data4">
                <h2>
                  <span data-percentage={730} className="tekup-counter" />+
                </h2>
                <p>Successfully Projects</p>
              </div>
              <div className="tekup-counter-data4">
                <h2>
                  <span data-percentage={198} className="tekup-counter" />+
                </h2>
                <p>Satisfied Happy Clients</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section tekup-section-padding2">
          <div className="container">
            <div className="tekup-section-title center">
              <h2>Meet the team behind techverse</h2>
            </div>
            <div className="row">
              <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-duration={500}>
                <div className="tekup-team-wrap">
                  <div className="tekup-team-thumb">
                    <img src="/assets/images/team/team1.png" alt="" />
                    <div className="tekup-social-icon-box style-four position">
                      <ul>
                        <li>
                          <a href="https://www.linkedin.com/">
                            <i className="ri-linkedin-fill" />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/">
                            <i className="ri-twitter-fill" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="ri-instagram-fill" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tekup-team-data">
                    <a href="single-team.html">
                      <h5>Marvin McKinney</h5>
                    </a>
                    <p>CEO &amp; Founder</p>
                  </div>
                </div>
              </div>
              {/* Repeat similar structure for team members... */}
            </div>
          </div>
        </div>
        {/* Additional sections... */}
      </Layout>
    </>
  );
};

export default About;
