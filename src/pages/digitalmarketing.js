import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';

const DigitalMarketing = () => {
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
        <title>Digital Marketing - Digital Araa</title>
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
        <div className="tekup-breadcrumb" style={{ backgroundImage: 'url(/assets/images/hero/social-media-banner.jpg)' }}>
          <div className="container">
            <h1 className="post__title">Digital Marketing</h1>
            <nav className="breadcrumbs">
              <ul>
                <li><a href="/">Home</a></li>
                <li aria-current="page">Digital Marketing</li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="section tekup-section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="tekup-service-details-wrap" data-aos="fade-up" data-aos-duration="600">
                  <img src="/assets/images/hero/social-media-banner.jpg" alt="Digital Marketing" />
                  <div className="tekup-service-details-item">
                    <h3>Overview</h3>
                    <p>Our Digital Marketing services help businesses connect with their target audience online. We specialize in SEO, social media marketing, content creation, and paid campaigns that drive traffic and improve brand awareness.</p>
                  </div>
                  <div className="tekup-service-details-item">
                    <h3>Features</h3>
                    <ul>
                      <li><i className="ri-check-line"></i> SEO and SEM strategies</li>
                      <li><i className="ri-check-line"></i> Social media marketing</li>
                      <li><i className="ri-check-line"></i> Pay-per-click advertising</li>
                      <li><i className="ri-check-line"></i> Content creation and optimization</li>
                      <li><i className="ri-check-line"></i> Analytics and reporting</li>
                    </ul>
                  </div>
                  <div className="tekup-service-details-item">
                    <h3>Goal</h3>
                    <p>Our goal is to provide businesses with the tools and strategies they need to reach and engage their customers through digital channels, ultimately driving growth and improving ROI.</p>
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
                      <li><a href="/it-management">IT Management <i className="ri-arrow-right-up-line"></i></a></li>
                      <li><a href="/cyber-security">Cyber Security <i className="ri-arrow-right-up-line"></i></a></li>
                    </ul>
                  </div>
                  <div className="tekup-service-contact" data-aos="fade-up" data-aos-duration="600" style={{ backgroundImage: 'url(/assets/images/service/bg.png)' }}>
                    <img src="/assets/images/service/icon.png" alt="Contact Us" />
                    <h3>Don’t hesitate to contact us</h3>
                    <p>We are here to help with your digital marketing needs and ensure your online success.</p>
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
                <p>We are architects of innovation, trailblazers of advancement, and partners in your success. As a dynamic and forward-thinking team, we’re ready to take your digital marketing strategy to the next level.</p>
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

export default DigitalMarketing;
