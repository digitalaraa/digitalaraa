// import React, { useEffect } from 'react';

// const ClientTestimonials = () => {
//   useEffect(() => {
//     // Initialize AOS for animations
//     import('aos').then(AOS => {
//       AOS.init({ duration: 100 });
//     });
//   }, []);

//   return (
//     <div className="section bg-light1 tekup-section-padding">
//       <div className="container">
//         <div className="tekup-section-title center">
//           <h2>Trusted by more than 200+ clients around the world</h2>
//         </div>
//         <div className="tekup-testimonial-slider">
//           {/* Testimonial 1 */}
//           <div className="tekup-testimonial-data">
//             <div className="tekup-testimonial-rating">
//               <ul>
//                 <li><i className="ri-star-s-fill"></i></li>
//                 <li><i className="ri-star-s-fill"></i></li>
//                 <li><i className="ri-star-s-fill"></i></li>
//                 <li><i className="ri-star-s-fill"></i></li>
//                 <li><i className="ri-star-s-fill"></i></li>
//               </ul>
//             </div>
//             <p>“ If you’re looking for a rewarding career and a chance to make an impact, you’ve come to the right place. We will transform your business through our techniques! ”</p>
//             <div className="tekup-testimonial-author">
//               <img src="/assets/images/team/team1.png" alt="Alexander Cameron" />
//               <h5>Alexander Cameron</h5>
//               <span>Lead Developer</span>
//             </div>
//           </div>

//           {/* Testimonial 2 */}
//           <div className="tekup-testimonial-data">
//             <div className="tekup-testimonial-rating">
//               <ul>
//                 <li><i className="ri-star-s-fill"></i></li>
//                 <li><i className="ri-star-s-fill"></i></li>
//                 <li><i className="ri-star-s-fill"></i></li>
//                 <li><i className="ri-star-s-fill"></i></li>
//                 <li><i className="ri-star-s-fill"></i></li>
//               </ul>
//             </div>
//             <p>“ If you’re looking for a rewarding career and a chance to make an impact, you’ve come to the right place. We will transform your business through our techniques! ”</p>
//             <div className="tekup-testimonial-author">
//               <img src="/assets/images/team/team1.png" alt="Alexander Cameron" />
//               <h5>Alexander Cameron</h5>
//               <span>Lead Developer</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClientTestimonials;


import React, { useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    text: "“ If you’re looking for a rewarding career and a chance to make an impact, you’ve come to the right place. We will transform your business through our techniques! ”",
    author: "Alexander Cameron",
    position: "Lead Developer",
    imgSrc: "/assets/images/team/team1.png",
  },
  {
    id: 2,
    text: "“ An amazing experience! The team is very professional and delivers high-quality results. Highly recommended! ”",
    author: "Emily Johnson",
    position: "Project Manager",
    imgSrc: "/assets/images/team/team2.png",
  },
  // Add more testimonials here
];

const ClientTestimonials = () => {
  useEffect(() => {
    // Initialize AOS for animations
    import('aos').then(AOS => {
      AOS.init({ duration: 600 }); // Set duration for smooth animations
    });
  }, []);

  return (
    <div className="section bg-light1 tekup-section-padding">
      <div className="container">
        <div className="tekup-section-title center">
          <h2>Trusted by more than 200+ clients around the world</h2>
        </div>
        <div className="tekup-testimonial-slider" data-aos="fade-up">
          {testimonials.map(testimonial => (
            <div className="tekup-testimonial-data" key={testimonial.id}>
              <div className="tekup-testimonial-rating">
                <ul>
                  <li><i className="ri-star-s-fill"></i></li>
                  <li><i className="ri-star-s-fill"></i></li>
                  <li><i className="ri-star-s-fill"></i></li>
                  <li><i className="ri-star-s-fill"></i></li>
                  <li><i className="ri-star-s-fill"></i></li>
                </ul>
              </div>
              <p>{testimonial.text}</p>
              <div className="tekup-testimonial-author">
                <img src={testimonial.imgSrc} alt={testimonial.author} />
                <h5>{testimonial.author}</h5>
                <span>{testimonial.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;
