import React, { useEffect } from 'react';
import { Link } from 'gatsby';

const ServicesSection = () => {
  useEffect(() => {
    // Initialize AOS for animations
    import('aos').then(AOS => {
      AOS.init();
    });
  }, []);

  return (
    <div className="section bg-light1 tekup-section-padding2">
      <div className="container">
        <div className="tekup-section-title center">
          <h2>We deal with the aspects of professional IT services</h2>
        </div>
        <div className="row">
          {/* First Column */}
          <div className="col-xl-4 col-md-6">
            <div className="tekup-iconbox-wrap3 bg-white" data-aos="fade-up" data-aos-duration="400">
              <div className="tekup-iconbox-icon3">
                <img src="/assets/images/v2/icon3.png" alt="Web Development" />
              </div>
              <div className="tekup-iconbox-data3">
                <Link to="/single-service.html">
                  <h5>Web Development</h5>
                </Link>
                <p>We are architects of technological advancement and partners in your success.</p>
              </div>
            </div>
            <div className="tekup-iconbox-wrap3 bg-white" data-aos="fade-up" data-aos-duration="1000">
              <div className="tekup-iconbox-icon3">
                <img src="/assets/images/v2/icon6.png" alt="Digital Marketing" />
              </div>
              <div className="tekup-iconbox-data3">
                <Link to="/single-service.html">
                  <h5>Digital Marketing</h5>
                </Link>
                <p>We are architects of technological advancement and partners in your success.</p>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="col-xl-4 col-md-6">
            <div className="tekup-iconbox-wrap3 bg-white" data-aos="fade-up" data-aos-duration="600">
              <div className="tekup-iconbox-icon3">
                <img src="/assets/images/v2/icon4.png" alt="App Development" />
              </div>
              <div className="tekup-iconbox-data3">
                <Link to="/single-service.html">
                  <h5>App Development</h5>
                </Link>
                <p>We are architects of technological advancement and partners in your success.</p>
              </div>
            </div>
            <div className="tekup-iconbox-wrap3 bg-white" data-aos="fade-up" data-aos-duration="1200">
              <div className="tekup-iconbox-icon3">
                <img src="/assets/images/v2/icon7.png" alt="IT Management" />
              </div>
              <div className="tekup-iconbox-data3">
                <Link to="/single-service.html">
                  <h5>IT Management</h5>
                </Link>
                <p>We are architects of technological advancement and partners in your success.</p>
              </div>
            </div>
          </div>

          {/* Third Column */}
          <div className="col-xl-4 col-md-12">
            <div className="row">
              <div className="col-xl-12 col-md-6">
                <div className="tekup-iconbox-wrap3 bg-white" data-aos="fade-up" data-aos-duration="800">
                  <div className="tekup-iconbox-icon3">
                    <img src="/assets/images/v2/icon5.png" alt="UI/UX Design" />
                  </div>
                  <div className="tekup-iconbox-data3">
                    <Link to="/single-service.html">
                      <h5>UI/UX Design</h5>
                    </Link>
                    <p>We are architects of technological advancement and partners in your success.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-md-6">
                <div className="tekup-iconbox-wrap3 bg-white" data-aos="fade-up" data-aos-duration="1400">
                  <div className="tekup-iconbox-icon3">
                    <img src="/assets/images/v2/icon8.png" alt="Content Writing" />
                  </div>
                  <div className="tekup-iconbox-data3">
                    <Link to="/single-service.html">
                      <h5>Content Writing</h5>
                    </Link>
                    <p>We are architects of technological advancement and partners in your success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="text-center tekup-extra-mt">
          <Link className="tekup-default-btn" to="/services.html">
            All Services <i className="ri-arrow-right-up-line"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
