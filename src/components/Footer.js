import React from "react";

const Footer = () => {
  return (
    <>
     <footer className="tekup-footer-section dark-bg">
      <div className="container">
        <div className="tekup-footer-top tekup-section-padding">
          <div className="row">
            <div className="col-xl-3 col-lg-12">
              <div className="tekup-footer-textarea light-color">
                <a href="index.html">
                  <img src="assets/images/logo/logo-white.svg" alt="Logo" />
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
                  <li><a href="about-us.html">About Us</a></li>
                  <li><a href="team.html">Our Team</a></li>
                  <li><a href="pricing.html">Pricing</a></li>
                  <li><a href="blog.html">Blogs</a></li>
                  <li><a href="contact-us.html">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-4">
              <div className="tekup-footer-menu light-color extar-margin">
                <div className="tekup-footer-title light-color">
                  <h5>Services</h5>
                </div>
                <ul>
                  <li><a href="">UI/UX Design</a></li>
                  <li><a href="">App Development</a></li>
                  <li><a href="">Digital Marketing</a></li>
                  <li><a href="">Web Development</a></li>
                  <li><a href="">Cyber Security</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-5">
              <div className="tekup-footer-title light-color">
                <h5>Subscribe Our Newsletter</h5>
                <p>Get ready to work together for the better solution for your business</p>
              </div>
              <div className="tekup-subscription">
                <form action="#">
                  <input type="email" placeholder="Enter your email" />
                  <button id="tekup-subscription-btn" type="button">
                    <i className="ri-send-plane-fill"></i>
                  </button>
                </form>
              </div>
            </div>
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
                  <li><a href="">Privacy Policy</a></li>
                  <li><a href="">Terms & Conditions</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer> 
    </>
  );
};

export default Footer;
