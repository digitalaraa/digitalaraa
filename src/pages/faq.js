import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Header from '../components/Header';
import AccordionSection from '../components/AccordionSection';

const Faq = () => {
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
        <title>Faqs - Digital Araa</title>
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
          <h1 className="post__title">Faqs</h1>
          <nav className="breadcrumbs">
            <ul>
              <li><a href="/index.html">Home</a></li>
              <li aria-current="page"> Faqs</li>
            </ul>
          </nav>
        </div>
      </div>
      {/* End breadcrumb */}

     <AccordionSection />
      {/* End section */}

      <div className="section bg-cover" style={{ backgroundImage: 'url(/assets/images/v1/cta-bg.png)' }}>
        <div className="container">
          <div className="tekup-cta-wrap">
            <div className="tekup-cta-content center">
              <h2>Let’s work together</h2>
              <p>We are architects of innovation, trailblazers of advancement, and partners in your success. As a dynamic and forward</p>
              <div className="tekup-extra-mt" data-aos="fade-up" data-aos-duration="600">
                <a className="tekup-default-btn tekup-white-btn" href="/contact-us.html">Start a Project <i className="ri-arrow-right-up-line"></i></a>
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

export default Faq;
