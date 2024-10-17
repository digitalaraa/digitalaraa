// // src/pages/faq.js

// import React, { useEffect, useState } from 'react';
// import { Helmet } from 'react-helmet';
// import Layout from '../components/layout';
// import Header from '../components/Header';

// const Faq = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   useEffect(() => {
//     import('aos').then(AOS => {
//       AOS.init({ duration: 100 });
//     });
//   }, []);

//   const faqs = [
//     { question: "What Is The Design Process For Branding?", answer: "At our IT solution company, we are committed to exceptional customer service and support." },
//     { question: "How Much Does Logo Design Services Cost?", answer: "At our IT solution company, we are committed to exceptional customer service and support." },
//     { question: "How Long Will It Take To Complete My Project?", answer: "At our IT solution company, we are committed to exceptional customer service and support." },
//     { question: "What Is Included In A Round Of Revisions?", answer: "At our IT solution company, we are committed to exceptional customer service and support." },
//     { question: "Are we too small for managed IT services?", answer: "At our IT solution company, we are committed to exceptional customer service and support." },
//     { question: "Why can't we print on both sides of the paper?", answer: "At our IT solution company, we are committed to exceptional customer service and support." },
//   ];

//   return (
//     <>
//       <Helmet>
//         <html lang="en" />
//         <meta charSet="UTF-8" />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Faqs - Digital Araa</title>
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
//         <div className="tekup-breadcrumb" style={{ backgroundImage: 'url(/assets/images/hero/faq.jpg)' }}>
//           <div className="container">
//             <h1 className="post__title">Faqs</h1>
//             <nav className="breadcrumbs">
//               <ul>
//                 <li><a href="/index.html">Home</a></li>
//                 <li aria-current="page"> Faqs</li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//         {/* End breadcrumb */}

//         <div className="section tekup-section-padding">
//           <div className="container">
//             <div className="tekup-accordion-column">
//               <div className="tekup-accordion-wrap mt-0 init-wrap">
//                 {faqs.map((faq, index) => (
//                   <div key={index} className={`tekup-accordion-item ${openIndex === index ? 'open' : ''}`}>
//                     <div className="tekup-accordion-header init-header" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
//                       <h5><span>Q{index + 1}.</span> {faq.question}</h5>
//                     </div>
//                     <div className={`tekup-accordion-body init-body ${openIndex === index ? 'show' : ''}`}>
//                       <p>{faq.answer}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* End section */}

//         <div className="section bg-cover" style={{ backgroundImage: 'url(/assets/images/v1/cta-bg.png)' }}>
//           <div className="container">
//             <div className="tekup-cta-wrap">
//               <div className="tekup-cta-content center">
//                 <h2>Let’s work together</h2>
//                 <p>We are architects of innovation, trailblazers of advancement, and partners in your success. As a dynamic and forward</p>
//                 <div className="tekup-extra-mt" data-aos="fade-up" data-aos-duration="600">
//                   <a className="tekup-default-btn tekup-white-btn" href="/contact-us.html">Start a Project <i className="ri-arrow-right-up-line"></i></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* End section */}
//       </Layout>
//     </>
//   );
// };

// export default Faq;


import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby'; // Import Link from Gatsby
import Layout from '../components/layout';
import Header from '../components/Header';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [heights, setHeights] = useState([]);
  const faqRefs = useRef([]);

  useEffect(() => {
    import('aos').then(AOS => {
      AOS.init({ duration: 100 });
    });
    
    // Set initial heights based on content
    setHeights(faqRefs.current.map(ref => ref ? ref.scrollHeight : 0));
  }, []);

  const faqs = [
    { question: "What Is The Design Process For Branding?", answer: "At our IT solution company, we are committed to exceptional customer service and support." },
    { question: "How Much Does Logo Design Services Cost?", answer: "At our IT solution company, we are committed to exceptional customer service and support." },
    { question: "How Long Will It Take To Complete My Project?", answer: "At our IT solution company, we are committed to exceptional customer service and support." },
    { question: "What Is Included In A Round Of Revisions?", answer: "At our IT solution company, we are committed to exceptional customer service and support." },
    { question: "Are we too small for managed IT services?", answer: "At our IT solution company, we are committed to exceptional customer service and support." },
    { question: "Why can't we print on both sides of the paper?", answer: "At our IT solution company, we are committed to exceptional customer service and support." },
  ];

  const handleToggle = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
        <Header />
        <div className="tekup-breadcrumb" style={{ backgroundImage: 'url(/assets/images/hero/faq.jpg)' }}>
          <div className="container">
            <h1 className="post__title">Faqs</h1>
            <nav className="breadcrumbs">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li aria-current="page"> Faqs</li>
              </ul>
            </nav>
          </div>
        </div>
        {/* End breadcrumb */}

        <div className="section tekup-section-padding">
          <div className="container">
            <div className="tekup-accordion-column">
              <div className="tekup-accordion-wrap mt-0 init-wrap">
                {faqs.map((faq, index) => (
                  <div key={index} className={`tekup-accordion-item ${openIndex === index ? 'open' : ''}`}>
                    <div 
                      className="tekup-accordion-header init-header" 
                      onClick={() => handleToggle(index)} 
                      aria-expanded={openIndex === index} // Added aria-expanded
                      role="button" // Added role for accessibility
                      tabIndex={0} // Make it focusable
                      onKeyPress={(e) => e.key === 'Enter' && handleToggle(index)} // Keyboard accessibility
                    >
                      <h5><span>Q{index + 1}.</span> {faq.question}</h5>
                    </div>
                    <div 
                      className={`tekup-accordion-body init-body ${openIndex === index ? 'show' : ''}`} 
                      ref={ref => faqRefs.current[index] = ref}
                      style={{ maxHeight: openIndex === index ? `${heights[index]}px` : '0' }} // Dynamic height
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* End section */}

        <div className="section bg-cover" style={{ backgroundImage: 'url(/assets/images/v1/cta-bg.png)' }}>
          <div className="container">
            <div className="tekup-cta-wrap">
              <div className="tekup-cta-content center">
                <h2>Let’s work together</h2>
                <p>We are architects of innovation, trailblazers of advancement, and partners in your success. As a dynamic and forward</p>
                <div className="tekup-extra-mt" data-aos="fade-up" data-aos-duration="600">
                  <Link className="tekup-default-btn tekup-white-btn" to="/contact-us.html">Start a Project <i className="ri-arrow-right-up-line"></i></Link>
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
