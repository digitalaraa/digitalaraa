// import React, { useEffect } from 'react';
// import { Link } from 'gatsby';
// import { Helmet } from 'react-helmet';
// import Layout from '../components/layout';
// import AOS from 'aos'; // Import AOS directly
// import 'aos/dist/aos.css'; // Import AOS styles
// import SolutionsSection from "../components/SolutionsSection";
// import ITServicesSection from "../components/ITServicesSection";
// import WorkingProcessSection from "../components/WorkingProcessSection";
// import WorkTogether from "../components/WorkTogether";

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
//         <title>Our Services - Digital Araa</title>
        
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
//       <SolutionsSection />
//       <ITServicesSection />
//       <WorkingProcessSection />
//       <WorkTogether />
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
import SolutionsSection from "../components/SolutionsSection";
import ITServicesSection from "../components/ITServicesSection";
import WorkingProcessSection from "../components/WorkingProcessSection";
import WorkTogether from "../components/WorkTogether";

const About = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 600 });

    // Optional cleanup
    return () => {
      AOS.refresh(); // Refresh AOS when the component is unmounted
    };
  }, []);

  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Us - Digital Araa</title> {/* Adjusted title for clarity */}
        
        
        {/* Preload critical CSS files for better performance */}
        <link rel="preload" href="/assets/css/main.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
        {/* <link rel="preload" href="/assets/css/bootstrap.min.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" /> */}

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
        <SolutionsSection />
        <ITServicesSection />
        <WorkingProcessSection />
        <WorkTogether />
      </Layout>
    </>
  );
};

export default About;
