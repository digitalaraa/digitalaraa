import React, { useEffect } from 'react';

const BusinessSuccessWithSkillBars = () => {
  useEffect(() => {
    // Initialize AOS for animations
    import('aos').then(AOS => {
      AOS.init();
    });
    
    // Skill Bar Animation
    const skillBars = document.querySelectorAll('.skillbar');
    skillBars.forEach(skillBar => {
      const percentage = skillBar.getAttribute('data-percent');
      skillBar.querySelector('.skillbar-bar').style.width = percentage + '%';
      skillBar.querySelector('.skill-bar-percent').textContent = percentage + '%';
    });
  }, []);

  return (
    <div className="section bg-light1 tekup-section-padding">
      <div className="container">
        <div className="row">
          {/* Left Column - Image */}
          <div className="col-lg-6 order-lg-2" data-aos="fade-up" data-aos-duration={600}>
            <div className="tekup-thumb ml-30">
              <img src="/assets/images/v3/thumb2.png" alt="Business Success" />
              <div className="tekup-thumb-card right">
                <img src="/assets/images/v3/project-done.png" alt="Projects Done" />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-lg-6 d-flex align-items-center">
            <div className="tekup-default-content mr-60">
              <h2>We are increasing business success with technology</h2>
              <p>
                We are architects of innovation, trailblazers of technological advancement, and partners in your success. 
                As a dynamic and forward-thinking organization.
              </p>

              {/* Skill Bars */}
              <div className="tekup-extra-mt">
                {/* Skill Bar 1 */}
                <div className="skillbar" data-percent={86}>
                  <p className="skillbar-lable">
                    <span className="skill-bar-title">Business Security</span>
                    <span className="skill-bar-percent" />
                  </p>
                  <div className="skillbar-box">
                    <p className="skillbar-bar" />
                  </div>
                </div>

                {/* Skill Bar 2 */}
                <div className="skillbar" data-percent={72}>
                  <p className="skillbar-lable">
                    <span className="skill-bar-title">Career Development</span>
                    <span className="skill-bar-percent" />
                  </p>
                  <div className="skillbar-box">
                    <p className="skillbar-bar" />
                  </div>
                </div>

                {/* Skill Bar 3 */}
                <div className="skillbar" data-percent={95}>
                  <p className="skillbar-lable">
                    <span className="skill-bar-title">Business Innovation</span>
                    <span className="skill-bar-percent" />
                  </p>
                  <div className="skillbar-box">
                    <p className="skillbar-bar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSuccessWithSkillBars;
