// import React, { useEffect } from 'react';
// import { Helmet } from 'react-helmet';
// import Layout from '../components/layout';
// import Header from '../components/Header';
// import ContactSection from '../components/ContactSection';

// const Contact = () => {
//   useEffect(() => {
//     import('aos').then(AOS => {
//      AOS.init({ duration: 100 });
//     });
//   }, []);

//   return (
//     <>
//       <Helmet>
//         <html lang="en" />
//         <meta charSet="UTF-8" />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Contact Us - Digital Araa</title>
//         <link rel="shortcut icon" href="/assets/images/favicon.ico" type="image/x-icon" />
//         <link rel="icon" href="/assets/images/favicon.ico" type="image/x-icon" />
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
//         <Header />
//         <div className="search-overlay" />
//         {/* End landex-header-section */}

//         <div
//           className="tekup-breadcrumb"
//           style={{ backgroundImage: "url(/assets/images/hero/contact-banner.jpg)" }}
//         >
//           <div className="container">
//             <h1 className="post__title">Contact us</h1>
//             <nav className="breadcrumbs">
//               <ul>
//                 <li>
//                   <a href="/index.html">Home</a>
//                 </li>
//                 <li aria-current="page"> Contact us</li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//         {/* End breadcrumb */}
        
//         <ContactSection />
//         {/* End section */}

//         {/* Google Map */}
//         <div id="map" style={{ height: '400px', width: '100%' }}>
//           <iframe
//             title="Google Map"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d314054.2439590543!2d76.92572241929492!3d11.0168448392633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8579bb0f01b43%3A0x1e0c0a6c77557ae5!2sCoimbatore%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1635415068353!5m2!1sen!2sus"
//             width="100%"
//             height="100%"
//             style={{ border: '0' }}
//             allowFullScreen=""
//             loading="lazy"
//           />
//         </div>
//         {/* End Google Map */}

//       </Layout>
//     </>
//   );
// };

// export default Contact;

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby'; // Import Link from Gatsby
import Layout from '../components/layout';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';

const Contact = () => {
  useEffect(() => {
    import('aos').then(AOS => {
      AOS.init({ duration: 100 });
    });
  }, []);

  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact Us - Digital Araa</title>
        <link rel="shortcut icon" href="/assets/images/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/assets/images/favicon.ico" type="image/x-icon" />
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
        <Header />
        <div className="search-overlay" />

        {/* Breadcrumb Section */}
        <div
          className="tekup-breadcrumb"
          style={{ backgroundImage: "url(/assets/images/hero/contact-banner.jpg)" }}
        >
          <div className="container">
            <h1 className="post__title">Contact Us</h1>
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li aria-current="page">Contact Us</li>
              </ul>
            </nav>
          </div>
        </div>
        {/* End breadcrumb */}
        
        <ContactSection />
        {/* End section */}

        {/* Google Map */}
        <div id="map" style={{ height: '400px', width: '100%' }}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d314054.2439590543!2d76.92572241929492!3d11.0168448392633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8579bb0f01b43%3A0x1e0c0a6c77557ae5!2sCoimbatore%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1635415068353!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
        {/* End Google Map */}
      </Layout>
    </>
  );
};

export default Contact;
