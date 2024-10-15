import React, { useEffect } from 'react';
import SkillBars from './SkillBars';

const BusinessSuccessWithSkillBars = () => {
  useEffect(() => {
    // Initialize AOS for animations
    import('aos').then(AOS => {
      AOS.init({ duration: 100 });
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
          <SkillBars />
        </div>
      </div>
    </div>
  );
};

export default BusinessSuccessWithSkillBars;
