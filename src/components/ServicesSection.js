// import React, { useEffect } from 'react';
// import { Link } from 'gatsby';

// const ServicesSection = () => {
//   useEffect(() => {
//     // Initialize AOS for animations
//     import('aos').then(AOS => {
//       AOS.init({ duration: 100 });
//     });
//   }, []);

//   return (
//     <>
//     <div className="section bg-light1 tekup-section-padding2">
//       <div className="container">
//         <div className="tekup-section-title center">
//           <h2>We deal with the aspects of professional IT services</h2>
//         </div>
//         <div className="row">
//           {/* First Column */}
//           <div className="col-xl-4 col-md-6">
//             <div className="tekup-iconbox-wrap3 bg-white" data-aos="fade-up" data-aos-duration="400">
//               <div className="tekup-iconbox-icon3">
//                 <img src="/assets/images/v2/icon3.png" alt="Web Development" />
//               </div>
//               <div className="tekup-iconbox-data3">
//                 <Link to="/single-service.html">
//                   <h5>Web Development</h5>
//                 </Link>
//                 <p>We are architects of technological advancement and partners in your success.</p>
//               </div>
//             </div>
//             <div className="tekup-iconbox-wrap3 bg-white" data-aos="fade-up" data-aos-duration="1000">
//               <div className="tekup-iconbox-icon3">
//                 <img src="/assets/images/v2/icon6.png" alt="Digital Marketing" />
//               </div>
//               <div className="tekup-iconbox-data3">
//                 <Link to="/single-service.html">
//                   <h5>Digital Marketing</h5>
//                 </Link>
//                 <p>We are architects of technological advancement and partners in your success.</p>
//               </div>
//             </div>
//           </div>

//           {/* Second Column */}
//           <div className="col-xl-4 col-md-6">
//             <div className="tekup-iconbox-wrap3 bg-white" data-aos="fade-up" data-aos-duration="600">
//               <div className="tekup-iconbox-icon3">
//                 <img src="/assets/images/v2/icon4.png" alt="App Development" />
//               </div>
//               <div className="tekup-iconbox-data3">
//                 <Link to="/single-service.html">
//                   <h5>App Development</h5>
//                 </Link>
//                 <p>We are architects of technological advancement and partners in your success.</p>
//               </div>
//             </div>
//             <div className="tekup-iconbox-wrap3 bg-white" data-aos="fade-up" data-aos-duration="1200">
//               <div className="tekup-iconbox-icon3">
//                 <img src="/assets/images/v2/icon7.png" alt="IT Management" />
//               </div>
//               <div className="tekup-iconbox-data3">
//                 <Link to="/single-service.html">
//                   <h5>IT Management</h5>
//                 </Link>
//                 <p>We are architects of technological advancement and partners in your success.</p>
//               </div>
//             </div>
//           </div>

//           {/* Third Column */}
//           <div className="col-xl-4 col-md-12">
//             <div className="row">
//               <div className="col-xl-12 col-md-6">
//                 <div className="tekup-iconbox-wrap3 bg-white" data-aos="fade-up" data-aos-duration="800">
//                   <div className="tekup-iconbox-icon3">
//                     <img src="/assets/images/v2/icon5.png" alt="UI/UX Design" />
//                   </div>
//                   <div className="tekup-iconbox-data3">
//                     <Link to="/single-service.html">
//                       <h5>UI/UX Design</h5>
//                     </Link>
//                     <p>We are architects of technological advancement and partners in your success.</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-xl-12 col-md-6">
//                 <div className="tekup-iconbox-wrap3 bg-white" data-aos="fade-up" data-aos-duration="1400">
//                   <div className="tekup-iconbox-icon3">
//                     <img src="/assets/images/v2/icon8.png" alt="Content Writing" />
//                   </div>
//                   <div className="tekup-iconbox-data3">
//                     <Link to="/single-service.html">
//                       <h5>Content Writing</h5>
//                     </Link>
//                     <p>We are architects of technological advancement and partners in your success.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Button */}
//         <div className="text-center tekup-extra-mt">
//           <Link className="tekup-default-btn" to="/services.html">
//             All Services <i className="ri-arrow-right-up-line"></i>
//           </Link>
//         </div>
//       </div>
//     </div>

//     </>
//   );
// };

// export default ServicesSection;


import React, { useEffect } from 'react';
import { Link } from 'gatsby';

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "We build websites that provide seamless experiences and drive business growth.",
    image: "/assets/images/v2/icon3.png",
    link: "/single-service.html",
  },
  {
    id: 2,
    title: "Digital Marketing",
    description: "We design effective digital marketing strategies that drive growth and measurable success.",
    image: "/assets/images/v2/icon6.png",
    link: "/single-service.html",
  },
  {
    id: 3,
    title: "App Development",
    description: "We create app solutions that deliver exceptional performance and user engagement.",
    image: "/assets/images/v2/icon4.png",
    link: "/single-service.html",
  },
  {
    id: 4,
    title: "IT Management",
    description: "We streamline IT operations to enhance efficiency and support your business goals.",
    image: "/assets/images/v2/icon7.png",
    link: "/single-service.html",
  },
  {
    id: 5,
    title: "UI/UX Design",
    description: "We create intuitive designs that enhance user experiences and drive engagement.",
    image: "/assets/images/v2/icon5.png",
    link: "/single-service.html",
  },
  {
    id: 6,
    title: "Social Media Marketing",
    description: "We develop engaging campaigns that connect your brand with the right audience.",
    image: "/assets/images/v2/icon8.png",
    link: "/single-service.html",
  },
];

const ServicesSection = () => {
  useEffect(() => {
    // Initialize AOS for animations
    import('aos').then(AOS => {
      AOS.init({ duration: 100 });
    });
  }, []);

  return (
    <div className="section bg-light1 tekup-section-padding2">
      <div className="container">
        <div className="tekup-section-title center">
          <h2>We deal with the aspects of professional IT services</h2>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div className={`col-xl-4 col-md-6 ${index < 4 ? "mb-4" : ""}`} key={service.id}>
              <div className="tekup-iconbox-wrap3 bg-white" data-aos="fade-up" data-aos-duration={`${(index + 1) * 200}`}>
                <div className="tekup-iconbox-icon3">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
                <div className="tekup-iconbox-data3">
                  <Link to={service.link} aria-label={`Learn more about ${service.title}`}>
                    <h5>{service.title}</h5>
                  </Link>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center tekup-extra-mt">
          <Link className="tekup-default-btn" to="/services.html" aria-label="View all services">
            All Services <i className="ri-arrow-right-up-line"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
