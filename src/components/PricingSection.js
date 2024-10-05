import React from 'react';

const PricingSection = () => {
  return (
    <div className="section tekup-section-padding2 dark-bg">
      <div className="container">
        <div className="tekup-section-title center light-color">
          <h2>Flexible Packages to Suit Your Needs</h2>
        </div>
        <div className="row">
          {/* Package Item 1 */}
          <div className="col-xl-4 col-md-6">
            <div className="tekup-pricing-wrap" data-aos="fade-up" data-aos-duration="400">
              <div className="tekup-pricing-header">
                <h4>Startup</h4>
                <p>Designed for new businesses looking to establish their online presence.</p>
              </div>
              <a className="tekup-pricing-btn" href="contact-us.html">Get Started <i className="ri-arrow-right-up-line"></i></a>
              <div className="tekup-pricing-feature">
                <ul>
                  <li><i className="ri-check-line"></i>Custom website design</li>
                  <li><i className="ri-check-line"></i>Responsive layout for all devices</li>
                  <li><i className="ri-check-line"></i>SEO services to improve visibility</li>
                  <li><i className="ri-check-line"></i>Logo and branding design</li>
                  <li><i className="ri-check-line"></i>Ongoing support for your site</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Package Item 2 */}
          <div className="col-xl-4 col-md-6">
            <div className="tekup-pricing-wrap" data-aos="fade-up" data-aos-duration="600">
              <div className="tekup-pricing-header">
                <h4>Business</h4>
                <p>Ideal for growing companies needing advanced features and support.</p>
              </div>
              <a className="tekup-pricing-btn active" href="contact-us.html">Get Started <i className="ri-arrow-right-up-line"></i></a>
              <div className="tekup-pricing-feature">
                <ul>
                  <li><i className="ri-check-line"></i>Comprehensive branding services</li>
                  <li><i className="ri-check-line"></i>Social Media Optimization (SMO)</li>
                  <li><i className="ri-check-line"></i>Search Engine Marketing (SEM)</li>
                  <li><i className="ri-check-line"></i>Content creation and management</li>
                  <li><i className="ri-check-line"></i>Monthly performance reports</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Package Item 3 */}
          <div className="col-xl-4 col-md-6">
            <div className="tekup-pricing-wrap" data-aos="fade-up" data-aos-duration="800">
              <div className="tekup-pricing-header">
                <h4>Enterprise</h4>
                <p>Comprehensive solutions for large businesses with complex needs.</p>
              </div>
              <a className="tekup-pricing-btn" href="contact-us.html">Get Started <i className="ri-arrow-right-up-line"></i></a>
              <div className="tekup-pricing-feature">
                <ul>
                  <li><i className="ri-check-line"></i>Custom software development</li>
                  <li><i className="ri-check-line"></i>Video editing and production</li>
                  <li><i className="ri-check-line"></i>Pay-per-click advertising (PPC)</li>
                  <li><i className="ri-check-line"></i>Analytics and reporting</li>
                  <li><i className="ri-check-line"></i>Dedicated account manager</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
