import React from 'react';

const SolutionsSection = () => {
  return (
    <>
      <div
        className="tekup-breadcrumb"
        style={{ backgroundImage: "url('/assets/images/breadcrumb/breadcrumb.png')" }}
      >
        <div className="container">
          <h1 className="post__title">Our Services</h1>
          <nav className="breadcrumbs">
            <ul>
              <li><a href="/index.html">Home</a></li>
              <li aria-current="page"> Our Services</li>
            </ul>
          </nav>
        </div>
      </div>
      {/* End breadcrumb */}

      <div className="section tekup-section-padding4">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="400">
              <div className="tekup-iconbox-wrap4">
                <div className="tekup-iconbox-icon4">
                  <img src="/assets/images/iconbox/icon8.png" alt="" />
                </div>
                <div className="tekup-iconbox-data4">
                  <h4>Expert Team Members</h4>
                  <p>We are architects of innovation, trailblazers technological advancement partners</p>
                  <a className="tekup-iconbox-btn" href="/single-service.html">
                    Learn More <i className="ri-arrow-right-up-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="600">
              <div className="tekup-iconbox-wrap4">
                <div className="tekup-iconbox-icon4">
                  <img src="/assets/images/iconbox/icon9.png" alt="" />
                </div>
                <div className="tekup-iconbox-data4">
                  <h4>Fastest Customer Service</h4>
                  <p>We are architects of innovation, trailblazers technological advancement partners</p>
                  <a className="tekup-iconbox-btn" href="/single-service.html">
                    Learn More <i className="ri-arrow-right-up-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="800">
              <div className="tekup-iconbox-wrap4">
                <div className="tekup-iconbox-icon4">
                  <img src="/assets/images/iconbox/icon10.png" alt="" />
                </div>
                <div className="tekup-iconbox-data4">
                  <h4>Competitive Pricing Plan</h4>
                  <p>We are architects of innovation, trailblazers technological advancement partners</p>
                  <a className="tekup-iconbox-btn" href="/single-service.html">
                    Learn More <i className="ri-arrow-right-up-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End section */}
    </>
  );
};

export default SolutionsSection;
