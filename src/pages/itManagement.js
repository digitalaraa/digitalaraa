import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';

const ITManagement = () => {
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
        <title>IT Management - Digital Araa</title>
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
            <h1 className="post__title">IT Management</h1>
            <nav className="breadcrumbs">
              <ul>
                <li><a href="/">Home</a></li>
                <li aria-current="page">IT Management</li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="section tekup-section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="tekup-service-details-wrap" data-aos="fade-up" data-aos-duration="600">
                  <img src="/assets/images/service/service-it-management.png" alt="IT Management" />
                  <div className="tekup-service-details-item">
                    <h3>Overview</h3>
                    <p>Our IT Management services are designed to streamline your business operations, ensuring that your IT infrastructure is efficient, secure, and scalable. From network management to cloud solutions, we provide the expertise to keep your business running smoothly.</p>
                  </div>
                  <div className="tekup-service-details-item">
                    <h3>Features</h3>
                    <ul>
                      <li><i className="ri-check-line"></i>24/7 IT support and monitoring</li>
                      <li><i className="ri-check-line"></i>Network infrastructure setup and management</li>
                      <li><i className="ri-check-line"></i>Cloud solutions and data backups</li>
                      <li><i className="ri-check-line"></i>IT security and compliance management</li>
                      <li><i className="ri-check-line"></i>Customized IT strategies for growth</li>
                    </ul>
                  </div>
                  <div className="tekup-service-details-item">
                    <h3>Goal</h3>
                    <p>Our goal is to provide seamless IT management solutions that ensure your technology infrastructure is always optimized, secure, and capable of scaling with your business.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="tekup-service-sidebar">
                  <div className="tekup-service-menu">
                    <ul>
                      <li><a href="/web-development">Web Development <i className="ri-arrow-right-up-line"></i></a></li>
                      <li><a href="/app-development">App Development <i className="ri-arrow-right-up-line"></i></a></li>
                      <li><a href="/ui-ux-design">UI/UX Design <i className="ri-arrow-right-up-line"></i></a></li>
                      <li><a href="/digital-marketing">Digital Marketing <i className="ri-arrow-right-up-line"></i></a></li>
                      <li><a href="/social-media-marketing">Social Media Marketing <i className="ri-arrow-right-up-line"></i></a></li>
                      <li><a href="/cyber-security">Cyber Security <i className="ri-arrow-right-up-line"></i></a></li>
                    </ul>
                  </div>
                  <div className="tekup-service-contact" data-aos="fade-up" data-aos-duration="600" style={{ backgroundImage: 'url(/assets/images/service/bg.png)' }}>
                    <img src="/assets/images/service/icon.png" alt="Contact Us" />
                    <h3>Don’t hesitate to contact us</h3>
                    <p>Our IT management experts are here to help you streamline your operations and maximize the potential of your technology.</p>
                    <a className="tekup-default-btn tekup-white-btn" href="/contact-us">Get in Touch <i className="ri-arrow-right-up-line"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section bg-cover" style={{ backgroundImage: 'url(/assets/images/v1/cta-bg.png)' }}>
          <div className="container">
            <div className="tekup-cta-wrap">
              <div className="tekup-cta-content center">
                <h2>Let’s work together</h2>
                <p>We provide comprehensive IT management services to help you focus on growing your business while we take care of your technology needs.</p>
                <div className="tekup-extra-mt" data-aos="fade-up" data-aos-duration="600">
                  <a className="tekup-default-btn tekup-white-btn" href="/contact-us">Start a Project <i className="ri-arrow-right-up-line"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactSection />
      </Layout>
    </>
  );
};

export default ITManagement;
