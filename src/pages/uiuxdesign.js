import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';

const UIUXDesign = () => {
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
        <title>UI/UX Design - Digital Araa</title>
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
        <Header />
        <div className="tekup-breadcrumb" style={{ backgroundImage: 'url(/assets/images/breadcrumb/breadcrumb.png)' }}>
          <div className="container">
            <h1 className="post__title">UI/UX Design</h1>
            <nav className="breadcrumbs">
              <ul>
                <li><a href="/">Home</a></li>
                <li aria-current="page"> UI/UX Design</li>
              </ul>
            </nav>
          </div>
        </div>
        
        <div className="section tekup-section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="tekup-service-details-wrap" data-aos="fade-up" data-aos-duration="600">
                  <img src="/assets/images/service/ui-ux-design.png" alt="UI/UX Design" />
                  <div className="tekup-service-details-item">
                    <h3>Overview</h3>
                    <p>UI/UX design plays a crucial role in ensuring that a website or application not only looks great but also provides an intuitive, user-friendly experience. By focusing on how users interact with the platform, we enhance engagement and satisfaction.</p>
                  </div>
                  <div className="tekup-service-details-item">
                    <h3>Features</h3>
                    <ul>
                      <li><i className="ri-check-line"></i> User-Centered Design</li>
                      <li><i className="ri-check-line"></i> Intuitive Navigation</li>
                      <li><i className="ri-check-line"></i> Consistent Visual Hierarchy</li>
                      <li><i className="ri-check-line"></i> Mobile Responsiveness</li>
                      <li><i className="ri-check-line"></i> A/B Testing for Usability</li>
                    </ul>
                  </div>
                  <div className="tekup-service-details-item">
                    <h3>Goal</h3>
                    <p>The ultimate goal of our UI/UX design services is to create digital experiences that are seamless, engaging, and aligned with the user’s needs, thereby improving overall satisfaction and business success.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="tekup-service-sidebar">
                  <div className="tekup-service-menu">
                    <ul>
                      <li><a href="/web-development/">Web Development <i className="ri-arrow-right-up-line"></i></a></li>
                      <li><a href="/app-development/">App Development <i className="ri-arrow-right-up-line"></i></a></li>
                      <li><a href="/digital-marketing/">Digital Marketing <i className="ri-arrow-right-up-line"></i></a></li>
                    </ul>
                  </div>
                  <div className="tekup-service-contact" data-aos="fade-up" data-aos-duration="600" style={{ backgroundImage: 'url(/assets/images/service/bg.png)' }}>
                    <img src="/assets/images/service/icon.png" alt="Service Icon" />
                    <h3>Need help with your project?</h3>
                    <p>We are committed to delivering top-notch digital solutions tailored to your needs.</p>
                    <a className="tekup-default-btn tekup-white-btn" href="/contact/">Get in Touch <i className="ri-arrow-right-up-line"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactSection />

        <div className="section bg-cover" style={{ backgroundImage: 'url(/assets/images/v1/cta-bg.png)' }}>
          <div className="container">
            <div className="tekup-cta-wrap">
              <div className="tekup-cta-content center">
                <h2>Let’s collaborate on your next project</h2>
                <p>We combine creativity and technology to deliver solutions that help businesses grow.</p>
                <div className="tekup-extra-mt" data-aos="fade-up" data-aos-duration="600">
                  <a className="tekup-default-btn tekup-white-btn" href="/contact/">Start a Project <i className="ri-arrow-right-up-line"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default UIUXDesign;
