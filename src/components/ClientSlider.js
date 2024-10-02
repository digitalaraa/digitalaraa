import React from 'react';
import Slider from 'react-slick';
//import 'slick-carousel/slick/slick.css';
//import 'slick-carousel/slick/slick-theme.css';

const ClientSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="section tekup-section-padding">
      <div className="container">
        <div className="tekup-section-title center">
          <h2>Trusted by more than 200+ clients around the world</h2>
        </div>
        <div className="tekup-t-two-column-slider-wrap">
          <Slider {...settings} className="tekup-t-two-column-slider">
            <div className="tekup-t-two-column-slider-item">
              <div className="row">
                <div className="col-lg-5">
                  <div className="tekup-t-two-column-thumb">
                    <img src="/assets/images/v2/t-thumb1.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-7 d-flex align-items-center">
                  <div className="tekup-t-two-column-data">
                    <div className="tekup-t-two-column-rating">
                      <ul>
                        <li><i className="ri-star-s-fill"></i></li>
                        <li><i className="ri-star-s-fill"></i></li>
                        <li><i className="ri-star-s-fill"></i></li>
                        <li><i className="ri-star-s-fill"></i></li>
                        <li><i className="ri-star-s-fill"></i></li>
                      </ul>
                    </div>
                    <p>“If you’re looking for a rewarding career and a chance to make an impact, you’ve come to the right place. We will transform your business through our techniques!”</p>
                    <div className="tekup-t-two-column-author">
                      <h5>Alexander Cameron</h5>
                      <span>Lead Developer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tekup-t-two-column-slider-item">
              <div className="row">
                <div className="col-lg-5">
                  <div className="tekup-t-two-column-thumb">
                    <img src="/assets/images/v2/t-thumb2.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-7 d-flex align-items-center">
                  <div className="tekup-t-two-column-data">
                    <div className="tekup-t-two-column-rating">
                      <ul>
                        <li><i className="ri-star-s-fill"></i></li>
                        <li><i className="ri-star-s-fill"></i></li>
                        <li><i className="ri-star-s-fill"></i></li>
                        <li><i className="ri-star-s-fill"></i></li>
                        <li><i className="ri-star-s-fill"></i></li>
                      </ul>
                    </div>
                    <p>“If you’re looking for a rewarding career and a chance to make an impact, you’ve come to the right place. We will transform your business through our techniques!”</p>
                    <div className="tekup-t-two-column-author">
                      <h5>Alexander Cameron</h5>
                      <span>Lead Developer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Add more slider items as needed */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ClientSlider;
