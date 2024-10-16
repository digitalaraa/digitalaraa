// // import * as React from "react"

// // import Layout from "../components/layout"
// // import Seo from "../components/seo"

// // const NotFoundPage = () => (
// //   <Layout>
// //     <h1>404: Not Found</h1>
// //     <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
// //   </Layout>
// // )

// // export const Head = () => <Seo title="404: Not Found" />

// // export default NotFoundPage

// // import * as React from "react"


// import React, { useEffect } from 'react';

// import Layout from "../components/layout"
// import Seo from "../components/seo"
// import { Helmet } from 'react-helmet';
// import AOS from 'aos'; // Import AOS directly
// import 'aos/dist/aos.css'; // Import AOS styles

// const NotFoundPage = () => {
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
//         <title>404 Page - Digital Araa</title>
        
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
//       <div className="tekup-errors-section">
//       <div className="container">
//         <div className="tekup-errors-content">
//           <img src="/assets/images/breadcrumb/errors404.png" alt="404 Error" />
//           <h2>Oops, this page is not found</h2>
//           <p>The page you’re looking for can’t be found. Double-check the URL and try again. We invite you to visit our homepage.</p>
//           <div className="tekup-extra-mt" data-aos="fade-up" data-aos-duration="600">
//             <a className="tekup-default-btn left" href="/index.html">Start a Project <i className="ri-arrow-right-up-line"></i></a>
//           </div>
//         </div>
//       </div>
//     </div>
//       </Layout>
//     </>
//   );
// };

// export default NotFoundPage;


import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Layout from "../components/layout";
import Seo from "../components/seo";
import AOS from 'aos'; // Import AOS directly
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'gatsby'; // Import Gatsby Link

const NotFoundPage = () => {
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
        <title>404 Page - Digital Araa</title>

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
      </Helmet>

      <Layout>
        <div className="tekup-errors-section">
          <div className="container">
            <div className="tekup-errors-content">
              <img 
                src="/assets/images/breadcrumb/errors404.png" 
                alt="404 Error" 
                loading="lazy" // Lazy load the image
              />
              <h2>Oops, this page is not found</h2>
              <p>The page you’re looking for can’t be found. Double-check the URL and try again. We invite you to visit our homepage.</p>
              <div className="tekup-extra-mt" data-aos="fade-up" data-aos-duration="600">
                <Link className="tekup-default-btn left" to="/">
                  Start a Project <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NotFoundPage;
