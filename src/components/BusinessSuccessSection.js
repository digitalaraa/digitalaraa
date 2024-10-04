import React, { useEffect } from 'react';
import { Link } from 'gatsby';

const BusinessSuccessSection = () => {
  useEffect(() => {
    // Initialize AOS for animations
    import('aos').then(AOS => {
      AOS.init();
    });
  }, []);

  return (
    <div className="section tekup-section-padding">
      <div className="container">
        <div className="row">
          {/* Left Column - Image and Rating */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-duration="600">
            <div className="tekup-thumb mr-30">
              <img src="/assets/images/v2/thumb1.png" alt="Thumbnail" />
              <div className="tekup-thumb-card">
                <img src="/assets/images/v3/rating.png" alt="Rating" />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-lg-6 d-flex align-items-center">
            <div className="tekup-default-content ml-60">
              <h2>We are increasing business success with technology</h2>
              <div className="tekup-extra-mt">
                <div className="tekup-icon-list-wrap">
                  {/* Icon List Item 1 */}
                  <div className="tekup-icon-list-item">
                    <div className="tekup-icon-list-icon">
                      <img src="/assets/images/v2/icon1.png" alt="Quality Solution" />
                    </div>
                    <div className="tekup-icon-list-data">
                      <h5>Quality Solution for Business</h5>
                      <p>We are architects of innovation, trailblazers of technological advancement, and partners in your success.</p>
                    </div>
                  </div>

                  {/* Icon List Item 2 */}
                  <div className="tekup-icon-list-item">
                    <div className="tekup-icon-list-icon">
                      <img src="/assets/images/v2/icon2.png" alt="Expert Teams" />
                    </div>
                    <div className="tekup-icon-list-data">
                      <h5>Amazing Expert Teams</h5>
                      <p>We provide expert support teams that will learn the intimate details of your business technology and processes.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="tekup-extra-mt">
                <Link className="tekup-default-btn" to="/about-us.html">
                  More About <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSuccessSection;
