import React from "react";
import ProgressCircle from '../components/ProgressCircle'; // Adjust path as needed
import digitalaraaLogo from '../../static/assets/images/logo/digitalaraa-logo.png'; // Ensure to include the file extension
import NewsletterSubscription from "./NewsletterSubscription";

const Footer = () => {
  return (
    <>
     <footer className="tekup-footer-section dark-bg">
      <div className="container">
        <div className="tekup-footer-top tekup-section-padding">
          <div className="row">
            <div className="col-xl-3 col-lg-12">
              <div className="tekup-footer-textarea light-color">
                <a href="/">
                  <img src={digitalaraaLogo} alt="Digital Araa Logo" />

                </a>
                <p>We are architects of advancement, and partners in your success. As a dynamic forward</p>
                <div className="tekup-social-icon-box style-two">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="ri-facebook-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="ri-linkedin-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="ri-twitter-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="ri-instagram-fill"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 offset-xl-1 col-md-3">
              <div className="tekup-footer-menu light-color">
                <div className="tekup-footer-title light-color">
                  <h5>Quick Links</h5>
                </div>
                <ul>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/services">Our Services</a></li>
                  <li><a href="/">Our Team</a></li>
                  <li><a href="/faq">Faqs</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-4">
              <div className="tekup-footer-menu light-color extar-margin">
                <div className="tekup-footer-title light-color">
                  <h5>Services</h5>
                </div>
                <ul>
                  <li><a href="/uiuxdesign">UI/UX Design</a></li>
                  <li><a href="/appdevelopment">App Development</a></li>
                  <li><a href="/digitalmarketing">Digital Marketing</a></li>
                  <li><a href="/webdevelopment">Web Development</a></li>
                  <li><a href="/itManagement">IT Management</a></li>
                </ul>
              </div>
            </div>
            <NewsletterSubscription />
          </div>
        </div>
        <div className="tekup-footer-bottom">
          <div className="row">
            <div className="col-md-6">
              <div className="tekup-copywright light-color right">
                <p>&copy; <span id="current-year"></span> Digitalaraa. All rights reserved.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tekup-footer-menu light-color style-two right mb-0">
                <ul>
                  <li><a href="/privacypolicy">Privacy Policy</a></li>
                  <li><a href="/termsconditions">Terms & Conditions</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
            <ProgressCircle />

    </footer> 
    </>
  );
};

export default Footer;
