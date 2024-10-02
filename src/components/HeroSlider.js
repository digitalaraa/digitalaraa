// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const HeroSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//   };

//   return (
//     <div className="tekup-hero-section2">
//       <Slider {...settings} className="tekup-hero-slider">
//         <div className="tekup-hero-slider-item" style={{ backgroundImage: `url('../../static/assets/images/hero/hero-bg3.png')` }}>
//           <div className="container">
//             <div className="tekup-hero-content center white-color large-content">
//               <div className="animated" data-animation-in="fadeInRight">
//                 <h1>The best innovative technology solutions</h1>
//                 <p>We are architects of innovation, trailblazers of technological advancement</p>
//               </div>
//               <div className="tekup-extra-mt animated" data-animation-in="fadeInUp" data-delay-in="0.3">
//                 <a className="tekup-default-btn tekup-white-btn" href="/contact-us">
//                   Start a Project <i className="ri-arrow-right-up-line"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="tekup-hero-slider-item" style={{ backgroundImage: `url('../../static/assets/images/hero/hero-bg1.png')` }}>
//           <div className="container">
//             <div className="tekup-hero-content center white-color large-content">
//               <div className="animated" data-animation-in="fadeInRight">
//                 <h1>The best innovative technology solutions</h1>
//                 <p>We are architects of innovation, trailblazers of technological advancement</p>
//               </div>
//               <div className="tekup-extra-mt animated" data-animation-in="fadeInUp" data-delay-in="0.3">
//                 <a className="tekup-default-btn tekup-white-btn" href="/contact-us">
//                   Start a Project <i className="ri-arrow-right-up-line"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default HeroSlider;
import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    afterChange: () => {
      const activeSlideElements = document.querySelectorAll('.slick-active .animated');
      activeSlideElements.forEach((element) => {
        element.style.opacity = '1';
      });
    }
  };

  useEffect(() => {
    // Set initial opacity to 0 for all animated elements
    const slides = document.querySelectorAll('.animated');
    slides.forEach(slide => {
      slide.style.opacity = '0';
    });

    // Show animated elements on the active slide when the page loads
    const activeSlideElements = document.querySelectorAll('.slick-active .animated');
    activeSlideElements.forEach((element) => {
      element.style.opacity = '1';
    });
  }, []);

  return (
    <div className="tekup-hero-section2">
      <Slider ref={sliderRef} {...settings} className="tekup-hero-slider">
        <div className="tekup-hero-slider-item" style={{ backgroundImage: `url('../../static/assets/images/hero/hero-bg3.png')` }}>
          <div className="container">
            <div className="tekup-hero-content center white-color large-content">
              <div className="animated" data-animation-in="fadeInRight">
                <h1>The best innovative technology solutions</h1>
                <p>We are architects of innovation, trailblazers of technological advancement</p>
              </div>
              <div className="tekup-extra-mt animated" data-animation-in="fadeInUp" data-delay-in="0.3">
                <a className="tekup-default-btn tekup-white-btn" href="/contact-us">
                  Start a Project <i className="ri-arrow-right-up-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="tekup-hero-slider-item" style={{ backgroundImage: `url('../../static/assets/images/hero/hero-bg1.png')` }}>
          <div className="container">
            <div className="tekup-hero-content center white-color large-content">
              <div className="animated" data-animation-in="fadeInRight">
                <h1>The best innovative technology solutions</h1>
                <p>We are architects of innovation, trailblazers of technological advancement</p>
              </div>
              <div className="tekup-extra-mt animated" data-animation-in="fadeInUp" data-delay-in="0.3">
                <a className="tekup-default-btn tekup-white-btn" href="/contact-us">
                  Start a Project <i className="ri-arrow-right-up-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
