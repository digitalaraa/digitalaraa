import React from 'react';
import { Link } from 'gatsby';
import 'aos/dist/aos.css'; // Ensure AOS styles are imported

const ServiceSidebar = () => {
  return (
    <div className="tekup-service-sidebar">
      <div className="tekup-service-menu">
        <ul>
          <li><Link to="/webdevelopment">Web Development <i className="ri-arrow-right-up-line"></i></Link></li>
          <li><Link to="/appdevelopment">App Development <i className="ri-arrow-right-up-line"></i></Link></li>
          <li><Link to="/uiuxdesign">UI/UX Design <i className="ri-arrow-right-up-line"></i></Link></li>
          <li><Link to="/digitalmarketing">Digital Marketing <i className="ri-arrow-right-up-line"></i></Link></li>
          <li><Link to="/itManagement">IT Management <i className="ri-arrow-right-up-line"></i></Link></li>
          {/* <li><Link to="/cyber-security">Cyber Security <i className="ri-arrow-right-up-line"></i></Link></li> */}
        </ul>
      </div>
      <div className="tekup-service-contact" data-aos="fade-up" data-aos-duration="600" style={{ backgroundImage: 'url(/assets/images/service/bg.png)' }}>
        <img src="/assets/images/service/icon.png" alt="Contact Us" />
        <h3>Don’t hesitate to contact us</h3>
        <p>We are here to help with your app development needs and ensure your digital success.</p>
        <Link className="tekup-default-btn tekup-white-btn" to="/contact">Get in Touch <i className="ri-arrow-right-up-line"></i></Link>
      </div>
    </div>
  );
};

export default ServiceSidebar;
