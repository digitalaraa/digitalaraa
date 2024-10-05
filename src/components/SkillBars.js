import React, { useEffect } from 'react';
import $ from 'jquery';

const SkillBars = () => {
  useEffect(() => {
    // Animate skill bars
    const animateSkillBars = () => {
      $('.skillbar').each(function () {
        const $this = $(this);
        const percent = $this.data('percent');
        const $bar = $this.find('.skillbar-bar');
        
        // Animate the bar width
        $bar.animate({ width: percent + '%' }, {
          duration: 2000,
          easing: 'swing',
        });

        // Update percentage text
        $this.find('.skill-bar-percent').text(percent + '%');
      });
    };

    // Call the animation function
    animateSkillBars();

    // Optionally add a scroll event listener to trigger the animation only when in view
    const handleScroll = () => {
      // You can implement logic to check if the skill bars are in view before animating
      // For simplicity, we're running it directly here.
      animateSkillBars();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
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
  
  );
};

export default SkillBars;
