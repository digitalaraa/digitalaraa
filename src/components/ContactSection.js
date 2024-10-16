// import React, { useEffect } from 'react';

// const ContactSection = () => {
//   useEffect(() => {
//     // Initialize AOS for animations
//     import('aos').then(AOS => {
//       AOS.init({ duration: 100 });
//     });
//   }, []);

//   return (
//     <div className="section tekup-section-padding">
//       <div className="container">
//         <div className="row">
//           <div className="col-xl-5 col-lg-6 d-flex align-items-center">
//             <div className="tekup-default-content">
//               <h2>Let’s build an awesome project together</h2>
//               <p>
//                 At our IT solution company, we are committed to exceptional
//                 customer service and support. If you are experiencing technical
//                 difficulties or need assistance with
//               </p>
//               <div className="tekup-contact-info-wrap wrap2">
//                 <div className="tekup-contact-info mb-0">
//                   <i className="ri-map-pin-2-fill" />
//                   <h5>Address</h5>
//                   <p>
//                     No 213, NGGO Colony,
//                     <br />
//                     Coimbatore,  
//                     <br />
//                     Tamilnadu, India.
//                   </p>
//                 </div>
//                 <div className="tekup-contact-info mb-0">
//                   <i className="ri-mail-fill" />
//                   <h5>Contact</h5>
//                   <a href="mailto:digitalaraa@email.com">digitalaraa@email.com</a>
//                   <a href="tel:+919843442155">9843442155</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-xl-6 offset-xl-1 col-lg-6">
//             <div className="tekup-main-form">
//               <h3>Fill The Contact Form</h3>
//               <p>Feel free to contact with us, we don’t spam your email</p>
//               <form action="#">
//                 <div className="row">
//                   <div className="col-lg-6">
//                     <div className="tekup-main-field">
//                       <input type="text" placeholder="Your name" />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="tekup-main-field">
//                       <input type="number" placeholder="Phone number" />
//                     </div>
//                   </div>
//                   <div className="col-lg-12">
//                     <div className="tekup-main-field">
//                       <input type="email" placeholder="Email address" />
//                     </div>
//                   </div>
//                   <div className="col-lg-12">
//                     <div className="tekup-main-field">
//                       <textarea
//                         name="textarea"
//                         placeholder="Write your message"
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-12">
//                     <button id="tekup-main-form-btn" type="button">
//                       Send Message <i className="ri-arrow-right-up-line" />
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSection;



import React, { useEffect, useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    // Initialize AOS for animations
    import('aos').then(AOS => {
      AOS.init({ duration: 600 }); // Set a longer duration for smoother animations
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission (e.g., send to an API or email)
    console.log('Form submitted:', formData);
    // Reset form after submission if needed
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="section tekup-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6 d-flex align-items-center">
            <div className="tekup-default-content">
              <h2>Let’s Build an Awesome Project Together</h2>
              <p>
                At our IT solution company, we are committed to exceptional
                customer service and support. If you are experiencing technical
                difficulties or need assistance with
              </p>
              <div className="tekup-contact-info-wrap wrap2">
                <div className="tekup-contact-info mb-0">
                  <i className="ri-map-pin-2-fill" />
                  <h5>Address</h5>
                  <p>
                    No 213, NGGO Colony,
                    <br />
                    Coimbatore,
                    <br />
                    Tamilnadu, India.
                  </p>
                </div>
                <div className="tekup-contact-info mb-0">
                  <i className="ri-mail-fill" />
                  <h5>Contact</h5>
                  <a href="mailto:digitalaraa@email.com">digitalaraa@email.com</a>
                  <a href="tel:+919843442155">9843442155</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 offset-xl-1 col-lg-6">
            <div className="tekup-main-form">
              <h3>Fill The Contact Form</h3>
              <p>Feel free to contact with us, we don’t spam your email</p>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="tekup-main-field">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="tekup-main-field">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="tekup-main-field">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="tekup-main-field">
                      <textarea
                        name="message"
                        placeholder="Write your message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button id="tekup-main-form-btn" type="submit">
                      Send Message <i className="ri-arrow-right-up-line" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
