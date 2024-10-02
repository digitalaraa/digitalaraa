import React, { useEffect } from 'react';
import $ from 'jquery';

const Stats = () => {
  useEffect(() => {
    // Initialize the counters
    $('.tekup-counter').each(function () {
      const $this = $(this);
      const countTo = $this.data('percentage');
      $({ countNum: $this.text() }).animate(
        { countNum: countTo },
        {
          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        }
      );
    });
  }, []);

  return (
    <div className="section tekup-section-padding-bottom">
      <div className="container">
        <div className="tekup-counter-wrap wrap2">
          <div className="tekup-counter-data tekup-counter-data2 aos-init aos-animate" data-aos="fade-up" data-aos-duration="400">
            <h2>
              <span data-percentage="26" className="tekup-counter"></span>+
            </h2>
            <h5>Years of Experience</h5>
            <p>To succeed, every software solution must be deeply integrated into the business.</p>
          </div>
          <div className="tekup-counter-data tekup-counter-data2 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600">
            <h2>
              <span data-percentage="730" className="tekup-counter"></span>+
            </h2>
            <h5>Successfully Projects Done</h5>
            <p>To succeed, every software solution must be deeply integrated into the business.</p>
          </div>
          <div className="tekup-counter-data tekup-counter-data2 aos-init aos-animate" data-aos="fade-up" data-aos-duration="800">
            <h2>
              <span data-percentage="198" className="tekup-counter"></span>+
            </h2>
            <h5>Satisfied Happy Clients</h5>
            <p>To succeed, every software solution must be deeply integrated into the business.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
