import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Header from '../components/Header';

const WebDevelopment = () => {
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
        <title>Web Development - Digital Araa</title>
        <link rel="shortcut icon" href="/assets/images/favicon.ico" type="image/x-icon" />
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
        <Header />
        <div className="tekup-breadcrumb" style={{ backgroundImage: 'url(/assets/images/breadcrumb/breadcrumb.png)' }}>
          <div className="container">
            <h1 className="post__title">Web Development</h1>
            <nav className="breadcrumbs">
              <ul>
                <li><a href="/">Home</a></li>
                <li aria-current="page">Web Development</li>
              </ul>
            </nav>
          </div>
        </div>
        {/* End breadcrumb */}

        <div className="section tekup-section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="tekup-service-details-wrap" data-aos="fade-up" data-aos-duration="600">
                  <img src="/assets/images/service/service-details.png" alt="Service Details" />
                  <div className="tekup-service-details-item">
                    <h3>Overview</h3>
                    <p>A content management system helps you create, manage, and publish content on the web. It keeps content organized and accessible for easy repurposing.</p>
                    <p>CMS provides user-friendly features for easy editing and is compatible with installing plugins and tools for more advanced functions.</p>
                  </div>
                  <div className="tekup-service-details-item">
                    <h3>Features</h3>
                    <p>A content management system (CMS) allows multiple contributors to create, edit, and publish content, typically stored in a database and displayed via templates.</p>
                    <div className="tekup-icon-list">
                      <ul>
                        <li><i className="ri-check-line"></i> Creating and editing content</li>
                        <li><i className="ri-check-line"></i> Workflows, reporting, and content organization</li>
                        <li><i className="ri-check-line"></i> User & role-based administration and security</li>
                        <li><i className="ri-check-line"></i> Flexibility, scalability, and performance</li>
                        <li><i className="ri-check-line"></i> Multilingual content capabilities</li>
                      </ul>
                    </div>
                  </div>
                  <div className="tekup-service-details-item">
                    <h3>Goal</h3>
                    <p>The goal of a content management system is to streamline the process of managing, organizing, and publishing content in an effective and efficient manner.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="tekup-service-sidebar">
                  <div className="tekup-service-menu">
                    <ul>
                      <li><a href="#">Web Development <i className="ri-arrow-right-up-line"></i></a></li>
                      <li><a href="#">App Development <i className="ri-arrow-right-up-line"></i></a></li>
                      <li><a href="#">UI/UX Design <i className="ri-arrow-right-up-line"></i></a></li>
                      <li><a href="#">Digital Marketing <i className="ri-arrow-right-up-line"></i></a></li>
                      <li><a href="#">IT Management <i className="ri-arrow-right-up-line"></i></a></li>
                      <li><a href="#">Cyber Security <i className="ri-arrow-right-up-line"></i></a></li>
                    </ul>
                  </div>
                  <div className="tekup-service-contact" data-aos="fade-up" data-aos-duration="600" style={{ backgroundImage: 'url(/assets/images/service/bg.png)' }}>
                    <img src="/assets/images/service/icon.png" alt="Contact Icon" />
                    <h3>Don't hesitate to contact us</h3>
                    <p>At Digital Araa, we are committed to providing exceptional IT solutions and services.</p>
                    <a className="tekup-default-btn tekup-white-btn" href="/contact-us">Get in Touch <i className="ri-arrow-right-up-line"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End section */}

        <div className="section bg-cover" style={{ backgroundImage: 'url(/assets/images/v1/cta-bg.png)' }}>
          <div className="container">
            <div className="tekup-cta-wrap">
              <div className="tekup-cta-content center">
                <h2>Let’s work together</h2>
                <p>We are architects of innovation, trailblazers of advancement, and partners in your success.</p>
                <div className="tekup-extra-mt" data-aos="fade-up" data-aos-duration="600">
                  <a className="tekup-default-btn tekup-white-btn" href="/contact-us">Start a Project <i className="ri-arrow-right-up-line"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End section */}
      </Layout>
    </>
  );
};

export default WebDevelopment;
