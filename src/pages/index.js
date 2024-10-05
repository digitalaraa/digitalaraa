// import React, { useEffect } from 'react';
// import { Helmet } from 'react-helmet';
// //import '../assets/css/main.css'; // Updated path to CSS
// import Header from "../components/Header"; // Import the Header component
// import Footer from "../components/Footer";
// import HeroSlider from "../components/HeroSlider";
// import ContentPage from '../components/ContentPage';
// import Stats from "../components/Stats";

// const IndexPage = () => {
//   useEffect(() => {
//     // Load AOS library (Animate On Scroll)
//     import('aos').then(AOS => {
//       AOS.init();
//     });
//   }, []);

//   return (
//     <>
//       <Helmet>
//         <html lang="en" />
//         <meta charSet="UTF-8" />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Digitalaraa</title>
//         <link rel="shortcut icon" href="/assets/images/favicon.ico" type="image/x-icon" />
//         <link rel="icon" href="/assets/images/favicon.ico" type="image/x-icon" />
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

//       <body className="light">
//       <Header /> {/* Place Header inside Helmet for proper integration */}
//       <HeroSlider />
//         <div className="section tekup-section-padding">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-6" data-aos="fade-up" data-aos-duration="600">
//                 <div className="tekup-thumb mr-30">
//                   <img src="/assets/images/v2/thumb1.png" alt="" />
//                   <div className="tekup-thumb-card">
//                     <img src="/assets/images/v3/rating.png" alt="" />
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-6 d-flex align-items-center">
//                 <div className="tekup-default-content ml-60">
//                   <h2>We are increasing business success with technology</h2>
//                   <div className="tekup-extra-mt">
//                     <div className="tekup-icon-list-wrap">
//                       <div className="tekup-icon-list-item">
//                         <div className="tekup-icon-list-icon">
//                           <img src="/assets/images/v2/icon1.png" alt="" />
//                         </div>
//                         <div className="tekup-icon-list-data">
//                           <h5>Quality Solution for Business</h5>
//                           <p>We are architects of innovation, trailblazers of technological advancement, and partners in your success dynamic</p>
//                         </div>
//                       </div>
//                       <div className="tekup-icon-list-item">
//                         <div className="tekup-icon-list-icon">
//                           <img src="/assets/images/v2/icon2.png" alt="" />
//                         </div>
//                         <div className="tekup-icon-list-data">
//                           <h5>Amazing Expert Teams</h5>
//                           <p>Support company that will learn the intimate details of your business technology and process while also</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="tekup-extra-mt">
//                     <a className="tekup-default-btn" href="/about-us.html">More About <i className="ri-arrow-right-up-line"></i></a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Stats />
//         {/* <div className="section tekup-section-padding-bottom">
//           <div className="container">
//             <div className="tekup-counter-wrap wrap2">
//               <div className="tekup-counter-data tekup-counter-data2" data-aos="fade-up" data-aos-duration="400">
//                 <h2><span data-percentage="26" className="tekup-counter"></span>+</h2>
//                 <h5>Years of Experience</h5>
//                 <p>To succeed, every software solution be deeply integrated into the</p>
//               </div>
//               <div className="tekup-counter-data tekup-counter-data2" data-aos="fade-up" data-aos-duration="600">
//                 <h2><span data-percentage="730" className="tekup-counter"></span>+</h2>
//                 <h5>Successfully Projects Done</h5>
//                 <p>To succeed, every software solution be deeply integrated into the</p>
//               </div>
//               <div className="tekup-counter-data tekup-counter-data2" data-aos="fade-up" data-aos-duration="800">
//                 <h2><span data-percentage="198" className="tekup-counter"></span>+</h2>
//                 <h5>Satisfied Happy Clients</h5>
//                 <p>To succeed, every software solution be deeply integrated into the</p>
//               </div>
//             </div>
//           </div>
//         </div> */}

//         <div className="section bg-light1 tekup-section-padding2">
//           <div className="container">
//             <div className="tekup-section-title center">
//               <h2>We deal with the aspects of professional IT services</h2>
//             </div>
//             <div className="row">
//               <div className="col-xl-4 col-md-6">
//                 <div className="tekup-iconbox-wrap3 bg-white" data-aos="fade-up" data-aos-duration="400">
//                   <div className="tekup-iconbox-icon3">
//                     <img src="/assets/images/v2/icon3.png" alt="" />
//                   </div>
//                   <div className="tekup-iconbox-data3">
//                     <a href="/single-service.html">
//                       <h5>Web Development</h5>
//                     </a>
//                     <p>We are architects technological advancement, and partners in your success. As a dynamic</p>
//                   </div>
//                 </div>
//                 <div className="tekup-iconbox-wrap3 bg-white" data-aos="fade-up" data-aos-duration="1000">
//                   <div className="tekup-iconbox-icon3">
//                     <img src="/assets/images/v2/icon6.png" alt="" />
//                   </div>
//                   <div className="tekup-iconbox-data3">
//                     <a href="/single-service.html">
//                       <h5>Digital Marketing</h5>
//                     </a>
//                     <p>We are architects technological advancement, and partners in your success. As a dynamic</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-xl-4 col-md-6">
//                 <div className="tekup-iconbox-wrap3 bg-white" data-aos="fade-up" data-aos-duration="600">
//                   <div className="tekup-iconbox-icon3">
//                     <img src="/assets/images/v2/icon4.png" alt="" />
//                   </div>
//                   <div className="tekup-iconbox-data3">
//                     <a href="/single-service.html">
//                       <h5>App Development</h5>
//                     </a>
//                     <p>We are architects technological advancement, and partners in your success. As a dynamic</p>
//                   </div>
//                 </div>
//                 <div className="tekup-iconbox-wrap3 bg-white" data-aos="fade-up" data-aos-duration="1200">
//                   <div className="tekup-iconbox-icon3">
//                     <img src="/assets/images/v2/icon7.png" alt="" />
//                   </div>
//                   <div className="tekup-iconbox-data3">
//                     <a href="/single-service.html">
//                       <h5>IT Management</h5>
//                     </a>
//                     <p>We are architects technological advancement, and partners in your success. As a dynamic</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-xl-4 col-md-12">
//                 <div className="row">
//                   <div className="col-xl-12 col-md-6">
//                     <div className="tekup-iconbox-wrap3 bg-white" data-aos="fade-up" data-aos-duration="800">
//                       <div className="tekup-iconbox-icon3">
//                         <img src="/assets/images/v2/icon5.png" alt="" />
//                       </div>
//                       <div className="tekup-iconbox-data3">
//                         <a href="/single-service.html">
//                           <h5>UI/UX Design</h5>
//                         </a>
//                         <p>We are architects technological advancement, and partners in your success. As a dynamic</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-xl-12 col-md-6">
//                     <div className="tekup-iconbox-wrap3 bg-white" data-aos="fade-up" data-aos-duration="1400">
//                       <div className="tekup-iconbox-icon3">
//                         <img src="/assets/images/v2/icon8.png" alt="" />
//                       </div>
//                       <div className="tekup-iconbox-data3">
//                         <a href="/single-service.html">
//                           <h5>Content Writing</h5>
//                         </a>
//                         <p>We are architects technological advancement, and partners in your success. As a dynamic</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="text-center tekup-extra-mt">
//               <a className="tekup-default-btn" href="/services.html">All Services <i className="ri-arrow-right-up-line"></i></a>
//             </div>
//           </div>
//         </div>
//         <ContentPage />
//         <Footer />
//       </body>
//     </>
//   );
// };

// export default IndexPage;


import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from "../components/Header"; // Import the Header component
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import ContentPage from '../components/ContentPage';
import Stats from "../components/Stats";
import ServicesSection from "../components/ServicesSection";
import BusinessSuccessSection from "../components/BusinessSuccessSection";


import AOS from 'aos'; // Import AOS directly for better initialization
import 'aos/dist/aos.css'; // Ensure AOS CSS is imported

const IndexPage = () => {
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
        <title>Digitalaraa</title>
        
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

      <body className="light">
        <Header /> {/* Place Header inside Helmet for proper integration */}
        <HeroSlider />
        {/* Main Content Section */}
        <BusinessSuccessSection />
        <Stats />
        <ServicesSection />
        <ContentPage />
        <Footer />
      </body>
    </>
  );
};

export default IndexPage;
