import React from 'react';

const WorkTogether = () => {
  return (
    <div className="section bg-cover" style={{ backgroundImage: 'url(/assets/images/v1/cta-bg.png)' }}>
      <div className="container">
        <div className="tekup-cta-wrap">
          <div className="tekup-cta-content center">
            <h2>Let’s work together</h2>
            <p>We collaborate closely with you, combining our expertise to achieve shared goals and drive success.</p>
            <div className="tekup-extra-mt" data-aos="fade-up" data-aos-duration="600">
              <a className="tekup-default-btn tekup-white-btn" href="/contact">Start a Project <i className="ri-arrow-right-up-line"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
