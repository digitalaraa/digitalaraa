import React from 'react';

const WorkingProcessSection = () => {
  return (
    <div className="section tekup-section-padding2">
      <div className="container">
        <div className="tekup-section-title center">
          <h2>Our working process on how to grow your business</h2>
        </div>
        <div className="tekup-iconbox-line" style={{ backgroundImage: 'url(/assets/images/v1/line.png)' }}>
          <div className="row" data-aos="fade-up" data-aos-duration="600">
            <div className="col-lg-4 col-md-6">
              <div className="tekup-iconbox-wrap2">
                <div className="tekup-iconbox-icon2">
                  <img src="/assets/images/iconbox/icon5.png" alt="" />
                  <div className="tekup-iconbox-count">01</div>
                </div>
                <div className="tekup-iconbox-data2">
                  <a href="/single-service.html">
                    <h5>Initiation & Planning</h5>
                  </a>
                  <p>We lay the groundwork for success, developing strategic plans that align with your vision and objectives.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="tekup-iconbox-wrap2">
                <div className="tekup-iconbox-icon2">
                  <img src="/assets/images/iconbox/icon6.png" alt="" />
                  <div className="tekup-iconbox-count">02</div>
                </div>
                <div className="tekup-iconbox-data2">
                  <a href="/single-service.html">
                    <h5>Execution & Development</h5>
                  </a>
                  <p>We turn plans into reality, delivering high-quality solutions that meet your needs and exceed expectations.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="tekup-iconbox-wrap2">
                <div className="tekup-iconbox-icon2">
                  <img src="/assets/images/iconbox/icon7.png" alt="" />
                  <div className="tekup-iconbox-count">03</div>
                </div>
                <div className="tekup-iconbox-data2">
                  <a href="/single-service.html">
                    <h5>Testing & Maintenance</h5>
                  </a>
                  <p>We ensure optimal performance through thorough testing and maintenance, keeping your systems running smoothly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcessSection;
