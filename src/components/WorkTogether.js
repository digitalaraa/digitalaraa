import React from 'react';

const WorkTogether = () => {
  return (
    <div className="section bg-cover" style={{ backgroundImage: 'url(/assets/images/v1/cta-bg.png)' }}>
      <div className="container">
        <div className="tekup-cta-wrap">
          <div className="tekup-cta-content center">
            <h2>Let’s work together</h2>
            <p>We are architects of innovation, trailblazers of advancement, and partners in your success. As a dynamic and forward</p>
            <div className="tekup-extra-mt" data-aos="fade-up" data-aos-duration="600">
              <a className="tekup-default-btn tekup-white-btn" href="/contact-us.html">Start a Project <i className="ri-arrow-right-up-line"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
