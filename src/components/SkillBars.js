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
      <h2>We boost business success through technology.</h2>
      <p>
      We drive innovation and technological progress, partnering with you for success as a forward-thinking organization.
      </p>
  
      {/* Skill Bars */}
      <div className="tekup-extra-mt">
        {/* Skill Bar 1 */}
        <div className="skillbar" data-percent={95}>
          <p className="skillbar-lable">
            <span className="skill-bar-title">Customer Satisfaction</span>
            <span className="skill-bar-percent" />
          </p>
          <div className="skillbar-box">
            <p className="skillbar-bar" />
          </div>
        </div>
  
        {/* Skill Bar 2 */}
        <div className="skillbar" data-percent={88}>
          <p className="skillbar-lable">
            <span className="skill-bar-title">Operational Efficiency</span>
            <span className="skill-bar-percent" />
          </p>
          <div className="skillbar-box">
            <p className="skillbar-bar" />
          </div>
        </div>
  
        {/* Skill Bar 3 */}
        <div className="skillbar" data-percent={90}>
          <p className="skillbar-lable">
            <span className="skill-bar-title">Market Growth</span>
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
