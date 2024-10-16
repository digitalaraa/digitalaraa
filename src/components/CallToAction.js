// import React, { useEffect } from 'react';

// const CallToAction = () => {
//   useEffect(() => {
//     // Initialize AOS for animations
//     import('aos').then(AOS => {
//       AOS.init({ duration: 100 });
//     });
//   }, []);

//   return (
//     <div
//       className="section bg-cover"
//       style={{ backgroundImage: 'url(/assets/images/v1/cta-bg.png)' }}
//     >
//       <div className="container">
//         <div className="tekup-cta-wrap">
//           <div className="tekup-cta-content center">
//             <h2>Let’s work together</h2>
//             <p>
//               We are architects of innovation, trailblazers of advancement, and
//               partners in your success. As a dynamic and forward-thinking team,
//               we’re ready to help you achieve your goals.
//             </p>
//             <div className="tekup-extra-mt" data-aos="fade-up" data-aos-duration="600">
//               <a
//                 className="tekup-default-btn tekup-white-btn"
//                 href="/contact-us"
//               >
//                 Start a Project <i className="ri-arrow-right-up-line"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CallToAction;


import React, { useEffect } from 'react';

const CallToAction = () => {
  useEffect(() => {
    // Initialize AOS for animations
    import('aos').then(AOS => {
      AOS.init({ duration: 600 }); // Increased duration for smoother animation
    });
  }, []);

  return (
    <div
      className="section bg-cover"
      style={{ backgroundImage: 'url(/assets/images/v1/cta-bg.png)' }}
    >
      <div className="container">
        <div className="tekup-cta-wrap">
          <div className="tekup-cta-content center" data-aos="fade-up" data-aos-duration="600">
            <h2>Let’s Work Together</h2>
            <p>
              We are architects of innovation, trailblazers of advancement, and
              partners in your success. As a dynamic and forward-thinking team,
              we’re ready to help you achieve your goals.
            </p>
            <div className="tekup-extra-mt">
              <a
                className="tekup-default-btn tekup-white-btn"
                href="/contact-us"
                aria-label="Start a project with us"
              >
                Start a Project <i className="ri-arrow-right-up-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
