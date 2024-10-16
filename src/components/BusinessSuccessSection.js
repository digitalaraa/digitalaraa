import React, { useEffect } from 'react';
import { Link } from 'gatsby';

// Import images from the assets folder
import thumb1 from '../../static/assets/images/hero/6.jpg';
import rating from '../../static/assets/images/v3/rating.png';
import icon1 from '../../static/assets/images/v2/icon1.png';
import icon2 from '../../static/assets/images/v2/icon2.png';

// Import AOS and its CSS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from '@reach/router';

const BusinessSuccessSection = () => {
  const location = useLocation();
  useEffect(() => {
    AOS.init({
      duration: 600, // Duration of animations
      once: true, // Animation happens only once
    });
  }, []);

  useEffect(() => {
    // Reinitialize AOS whenever the route changes
    AOS.refresh();
  }, [location.pathname]);

  return (
    <div className="section tekup-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="tekup-thumb mr-30">
              {/* Use imported images */}
              <img src={thumb1} alt="Thumb" />
              <div className="tekup-thumb-card">
                <img src={rating} alt="Rating" />
              </div>
            </div>
          </div>

          <div className="col-lg-6 d-flex align-items-center">
            <div className="tekup-default-content ml-60">
              <h2>We are increasing business success with technology</h2>

              <div className="tekup-extra-mt">
                <div className="tekup-icon-list-wrap">
                  <div className="tekup-icon-list-item">
                    <div className="tekup-icon-list-icon">
                      <img src={icon1} alt="Icon 1" />
                    </div>
                    <div className="tekup-icon-list-data">
                      <h5>Quality Solution for Business</h5>
                      <p>
                        We are architects of innovation, trailblazers of
                        technological advancement, and partners in your success.
                      </p>
                    </div>
                  </div>

                  <div className="tekup-icon-list-item">
                    <div className="tekup-icon-list-icon">
                      <img src={icon2} alt="Icon 2" />
                    </div>
                    <div className="tekup-icon-list-data">
                      <h5>Amazing Expert Teams</h5>
                      <p>
                        Support company that will learn the intimate details of
                        your business technology and process while also.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tekup-extra-mt">
                <Link className="tekup-default-btn" to="/about-us">
                  More About <i className="ri-arrow-right-up-line" />
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
