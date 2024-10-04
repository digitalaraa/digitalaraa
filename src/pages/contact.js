import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';
const Contact = () => {
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
      
  <Header />
  <div className="search-overlay" />
  {/*End landex-header-section */}
  
  <div
    className="tekup-breadcrumb"
    style={{ backgroundImage: "url(assets/images/breadcrumb/breadcrumb.png)" }}
  >
    <div className="container">
      <h1 className="post__title">Contact us</h1>
      <nav className="breadcrumbs">
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li aria-current="page"> Contact us</li>
        </ul>
      </nav>
    </div>
  </div>
  {/* End breadcrumb */}
   <ContactSection /> 
  {/* End section */}
  <div id="map" />
      </Layout>
    </>
  );
};

export default Contact;
