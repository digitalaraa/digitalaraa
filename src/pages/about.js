// import React, { useEffect } from 'react';
// import { Link } from 'gatsby';
// import { Helmet } from 'react-helmet';
// import Layout from '../components/layout';
// import AOS from 'aos'; // Import AOS directly
// import 'aos/dist/aos.css'; // Import AOS styles
// import BusinessSuccessWithSkillBars from "../components/BusinessSuccessWithSkillBars";
// //import MeetTheTeam from "../components/MeetTheTeam";
// //import ClientTestimonials from "../components/ClientTestimonials";
// import ContactSection from "../components/ContactSection";
// import CallToAction from "../components/CallToAction";


// const About = () => {
//   useEffect(() => {
//     // Initialize AOS
//     AOS.init({ duration: 600 });
//   }, []);

//   return (
//     <>
//       <Helmet>
//         <html lang="en" />
//         <meta charSet="UTF-8" />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>About Us - Digital Araa</title>
        
//         {/* Preload critical CSS files */}
//         <link rel="preload" href="/assets/css/main.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
//         <link rel="preload" href="/assets/css/bootstrap.min.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
        
//         {/* Favicon */}
//         <link rel="shortcut icon" href="/assets/images/favicon.ico" type="image/x-icon" />
//         <link rel="icon" href="/assets/images/favicon.ico" type="image/x-icon" />

//         {/* Fonts and CSS */}
//         <link href="https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />
//         <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
//         <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
//         <link rel="stylesheet" href="/assets/css/slick.css" />
//         <link rel="stylesheet" href="/assets/css/animate.css" />
//         <link rel="stylesheet" href="/assets/css/fontawesome.css" />
//         <link rel="stylesheet" href="/assets/css/aos.css" />
//         <link rel="stylesheet" href="/assets/css/remixicon.css" />
//         <link rel="stylesheet" href="/assets/css/main.css" />
//         <link rel="stylesheet" href="/assets/css/app.min.css" />
//       </Helmet>

//       <Layout>
//         {/* Breadcrumb Section */}
//         <div className="tekup-breadcrumb" style={{ backgroundImage: 'url(/assets/images/hero/about-us.jpg)' }}>
//           <div className="container">
//             <h1 className="post__title">About Us</h1>
//             <nav className="breadcrumbs">
//               <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li aria-current="page">About Us</li>
//               </ul>
//             </nav>
//           </div>
//         </div>

//         {/* About Us Section */}
//         <div className="section tekup-section-padding">
//           <div className="container">
//             <div className="row">
//               <div className="col-xl-6 col-lg-6" data-aos="fade-up" data-aos-duration="600">
//                 <div className="tekup-thumb">
//                   <img src="/assets/images/v1/thumb1.png" alt="About Us Image" />
//                   <div className="tekup-thumb-card">
//                     <img src="/assets/images/v3/Satisfaction.png" alt="Satisfaction" />
//                   </div>
//                 </div>
//               </div>
//               <div className="col-xl-5 offset-xl-1 col-lg-6 d-flex align-items-center">
//                 <div className="tekup-default-content">
//                   <h2>Exclusive technology to provide IT solutions</h2>
//                   <p>We are architects of innovation, trailblazers of technological advancement, and partners in your success. As a dynamic and forward-thinking organization, we strive to deliver exceptional technology solutions for modern businesses.</p>
//                   <div className="tekup-icon-list">
//                     <ul>
//                       <li><i className="ri-check-line"></i>Easily Build Custom Reports And Dashboards</li>
//                       <li><i className="ri-check-line"></i>Legacy Software Modernization</li>
//                       <li><i className="ri-check-line"></i>Software For The Open Enterprise</li>
//                     </ul>
//                   </div>
//                   <div className="tekup-extra-mt">
//                     <Link className="tekup-default-btn" to="/about-us.html">More About <i className="ri-arrow-right-up-line"></i></Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Additional Section */}
//         <BusinessSuccessWithSkillBars />
//         {/* Team Section */}
//         {/* <MeetTheTeam />
//         <ClientTestimonials /> */}
//         <ContactSection />
//         <CallToAction />
//       </Layout>
//     </>
//   );
// };

// export default About;



import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import AOS from 'aos'; // Import AOS directly
import 'aos/dist/aos.css'; // Import AOS styles
import BusinessSuccessWithSkillBars from "../components/BusinessSuccessWithSkillBars";
import ContactSection from "../components/ContactSection";
import CallToAction from "../components/CallToAction";

const About = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 600 });
  }, []);

  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Us - Digital Araa</title>
        
        {/* Preload critical CSS files */}
        {[
          "/assets/css/main.css",
          "/assets/css/bootstrap.min.css",
        ].map(href => (
          <link 
            key={href}
            rel="preload" 
            href={href} 
            as="style" 
            onLoad="this.onload=null;this.rel='stylesheet'" 
          />
        ))}

        {/* Favicon */}
        <link rel="shortcut icon" href="/assets/images/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/assets/images/favicon.ico" type="image/x-icon" />

        {/* Fonts and CSS */}
        <link href="https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />
        {[
          "bootstrap.min.css",
          "magnific-popup.css",
          "slick.css",
          "animate.css",
          "fontawesome.css",
          "aos.css",
          "remixicon.css",
          "main.css",
          "app.min.css"
        ].map(file => (
          <link key={file} rel="stylesheet" href={`/assets/css/${file}`} />
        ))}
        
        {/* Preload critical CSS files for better performance */}
        <link rel="preload" href="/assets/css/main.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
        <link rel="preload" href="/assets/css/bootstrap.min.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />

        {/* Favicon */}
        <link rel="shortcut icon" href="/assets/images/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/assets/images/favicon.ico" type="image/x-icon" />

        {/* Fonts and CSS */}
        <link href="https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />
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
        {/* Breadcrumb Section */}
        <div className="tekup-breadcrumb" style={{ backgroundImage: 'url(/assets/images/hero/about-us.jpg)' }}>
          <div className="container">
            <h1 className="post__title">About Us</h1>
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li aria-current="page">About Us</li>
              </ul>
            </nav>
          </div>
        </div>

        {/* About Us Section */}
        <div className="section tekup-section-padding">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6" data-aos="fade-up" data-aos-duration="600">
                <div className="tekup-thumb">
                  <img 
                    src="/assets/images/hero/about-content-2.jpg" 
                    alt="About Us Image" 
                    loading="lazy" // Lazy load the image
                  />
                  <div className="tekup-thumb-card">
                    <img 
                      src="/assets/images/v3/Satisfaction.png" 
                      alt="Satisfaction" 
                      loading="lazy" // Lazy load the image
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 offset-xl-1 col-lg-6 d-flex align-items-center">
                <div className="tekup-default-content">
                  <h2>Innovative IT Solutions for Your Business</h2>
                  <p>We design powerful digital experiences that drive success. Our mission is to provide modern web solutions that enhance your brand and connect you with your audience.</p>
                  <div className="tekup-icon-list">
                    <ul>
                      <li><i className="ri-check-line"></i>Responsive Web Design for All Devices</li>
                      <li><i className="ri-check-line"></i>Social Media Marketing to Connect with Customers</li>
                      <li><i className="ri-check-line"></i>SEO-Optimized Websites to Boost Visibility</li>
                      <li><i className="ri-check-line"></i>E-commerce Solutions to Grow Sales</li>
                      <li><i className="ri-check-line"></i>Targeted Digital Marketing Strategies</li>
                      
                    </ul>
                  </div>
                  <div className="tekup-extra-mt">
                    <Link className="tekup-default-btn" to="/about-us.html">
                      More About <i className="ri-arrow-right-up-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Section */}
        <BusinessSuccessWithSkillBars />
        <ContactSection />
        <CallToAction />
      </Layout>
    </>
  );
};

export default About;
