
// import React, { useEffect } from 'react';
// import { Helmet } from 'react-helmet';
// import Header from "../components/Header"; // Import the Header component
// import Footer from "../components/Footer";
// import HeroSlider from "../components/HeroSlider";
// import ContentPage from '../components/ContentPage';
// import Stats from "../components/Stats";
// import ServicesSection from "../components/ServicesSection";
// import BusinessSuccessSection from "../components/BusinessSuccessSection";


// import AOS from 'aos'; // Import AOS directly for better initialization
// import 'aos/dist/aos.css'; // Ensure AOS CSS is imported

// const IndexPage = () => {
//   useEffect(() => {
//     // Initialize AOS
//      AOS.init({ duration: 100 });
//   }, []);

//   return (
//     <>
//       <Helmet>
//         <html lang="en" />
//         <meta charSet="UTF-8" />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Digitalaraa</title>
        
//         {/* Preload critical CSS files for better performance */}
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

//       <body className="light">
//         <Header /> {/* Place Header inside Helmet for proper integration */}
//         <HeroSlider />
//         {/* Main Content Section */}
//         <BusinessSuccessSection />
//         <Stats />
//         <ServicesSection />
//         <ContentPage />
//         <Footer />
//       </body>
//     </>
//   );
// };

// export default IndexPage;


// import React, { useEffect } from 'react';
// import { Helmet } from 'react-helmet';
// import Header from "../components/Header"; // Import the Header component
// import Footer from "../components/Footer";
// import HeroSlider from "../components/HeroSlider";
// import ContentPage from '../components/ContentPage';
// import Stats from "../components/Stats";
// import ServicesSection from "../components/ServicesSection";
// import BusinessSuccessSection from "../components/BusinessSuccessSection";
// import Preloader from '../components/Preloader'; // Import the Preloader component

// import AOS from 'aos'; // Import AOS directly for better initialization
// import 'aos/dist/aos.css'; // Ensure AOS CSS is imported

// const IndexPage = () => {
//   useEffect(() => {
//     // Initialize AOS
//     AOS.init({ duration: 100 });

//     // Optional cleanup
//     return () => {
//       AOS.refresh(); // Refresh AOS when the component is unmounted
//     };
//   }, []);

//   useEffect(() => {
//     // Set body class for theme
//     document.body.classList.add("light");
//     return () => {
//       document.body.classList.remove("light"); // Clean up class on unmount
//     };
//       // Optional: Add logic to remove preloader after page loads
//       const preloader = document.querySelector('.tekup-preloader-wrap');
//       window.addEventListener('load', () => {
//         preloader.style.display = 'none'; // Hide preloader after page load
//       });
//   }, []);

//   return (
//     <>
//       <Helmet>
//         <html lang="en" />
//         <meta charSet="UTF-8" />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Digitalaraa</title>

//         {/* Preload critical CSS files for better performance */}
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
//       <Preloader />
//       <Header />
//       <HeroSlider />
//       {/* Main Content Section */}
//       <BusinessSuccessSection />
//       <Stats />
//       <ServicesSection />
//       <ContentPage />
//       <Footer />
//     </>
//   );
// };

// export default IndexPage;



// import React, { useEffect } from 'react';
// import { Helmet } from 'react-helmet';
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import HeroSlider from "../components/HeroSlider";
// import ContentPage from '../components/ContentPage';
// import Stats from "../components/Stats";
// import ServicesSection from "../components/ServicesSection";
// import BusinessSuccessSection from "../components/BusinessSuccessSection";
// import Preloader from '../components/Preloader';

// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const IndexPage = () => {
//   useEffect(() => {
//     // Initialize AOS
//     AOS.init({ duration: 100 });

//     return () => {
//       AOS.refresh();
//     };
//   }, []);

//   useEffect(() => {
//     // Set body class for theme
//     document.body.classList.add("light");

//     // Function to hide the preloader
//     const hidePreloader = () => {
//       const preloader = document.querySelector('.tekup-preloader-wrap');
//       if (preloader) {
//         preloader.style.opacity = '0';
//         setTimeout(() => {
//           preloader.style.display = 'none';
//         }, 500);
//       }
//     };

//     // Check if the document is already loaded
//     if (document.readyState === 'complete') {
//       hidePreloader();
//     } else {
//       // Add event listeners for page load and DOMContentLoaded
//       window.addEventListener('load', hidePreloader);
//       document.addEventListener('DOMContentLoaded', hidePreloader);
//     }

//     // Cleanup event listeners on unmount
//     return () => {
//       window.removeEventListener('load', hidePreloader);
//       document.removeEventListener('DOMContentLoaded', hidePreloader);
//       document.body.classList.remove("light");
//     };
//   }, []);

//   return (
//     <>
//       <Helmet>
//         <html lang="en" />
//         <meta charSet="UTF-8" />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Digitalaraa</title>

//         {/* Preload critical CSS files for better performance */}
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
//       <Preloader />
//       <Header />
//       <HeroSlider />
//       {/* Main Content Section */}
//       <BusinessSuccessSection />
//       <Stats />
//       <ServicesSection />
//       <ContentPage />
//       <Footer />
//     </>
//   );
// };

// export default IndexPage;




import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import ContentPage from '../components/ContentPage';
import Stats from "../components/Stats";
import ServicesSection from "../components/ServicesSection";
import BusinessSuccessSection from "../components/BusinessSuccessSection";
import Preloader from '../components/Preloader';

import AOS from 'aos';
import 'aos/dist/aos.css';

const IndexPage = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 100 });

    return () => {
      AOS.refresh();
    };
  }, []);

  useEffect(() => {
    // Function to check if an element is in the viewport
    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Function to trigger animation
    const triggerAnimation = () => {
      const elements = document.querySelectorAll('[data-aos]'); // Select elements with AOS attributes

      elements.forEach((el) => {
        if (isElementInViewport(el)) {
          el.classList.add('aos-init');
          el.classList.add('aos-animate');
        }
      });
    };

    // Initial check to trigger animations on load if elements are already in view
    triggerAnimation();

    // Listen for scroll events
    window.addEventListener('scroll', triggerAnimation);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', triggerAnimation);
    };
  }, []);

  useEffect(() => {
    // Function to hide preloader
    const hidePreloader = () => {
      const preloader = document.querySelector('.tekup-preloader-wrap');
      if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 500); // Match this timeout to your CSS transition duration
      }
    };

    // Check if the document is already loaded
    if (document.readyState === 'complete') {
      hidePreloader();
    } else {
      // Add event listeners for page load
      window.addEventListener('load', hidePreloader);
    }

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('load', hidePreloader);
    };
  }, []);

  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Digitalaraa</title>

        {/* Inline critical CSS */}
        <style>
          {`
            body.loading {
              visibility: hidden;
            }
            .tekup-preloader-wrap {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              background: white;
              z-index: 9999;
              transition: opacity 0.5s ease; /* Ensure smooth transition */
            }
          `}
        </style>

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
      <Preloader />
      <Header />
      <HeroSlider />
      {/* Main Content Section */}
      <BusinessSuccessSection />
      <Stats />
      <ServicesSection />
      <ContentPage />
      <Footer />
    </>
  );
};

export default IndexPage;

