import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TestimonialsAndBlog from "./TestimonialsAndBlog";
import ClientSlider from './ClientSlider'; // Adjust the path as needed

// Make sure to update the image paths accordingly
const ContentPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <Helmet>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.1/aos.js"></script>
      </Helmet>

      {/* Projects Section */}
      <div className="section tekup-section-padding">
        <div className="container">
          <div className="tekup-section-title center">
            <h2>Explore our recent projects</h2>
          </div>
          <div className="row">
            {/* Project Item 1 */}
            <div className="col-xl-4 col-md-6">
              <div className="tekup-portfolio-wrap2" data-aos="fade-up" data-aos-duration="400">
                <div className="tekup-portfolio-thumb2">
                  <img src="/assets/images/p2/p_1.png" alt="Design of the year" />
                  <div className="tekup-portfolio-data2">
                    <a href="single-portfolio.html">
                      <h5>Design of the year</h5>
                    </a>
                    <p>UI/UX Design</p>
                    <a className="tekup-portfolio-btn2" href="single-portfolio.html">
                      <i className="ri-arrow-right-up-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Project Item 2 */}
            <div className="col-xl-4 col-md-6">
              <div className="tekup-portfolio-wrap2" data-aos="fade-up" data-aos-duration="600">
                <div className="tekup-portfolio-thumb2">
                  <img src="/assets/images/p2/p_2.png" alt="Ways to level up your brand" />
                  <div className="tekup-portfolio-data2">
                    <a href="single-portfolio.html">
                      <h5>Ways to level up your brand</h5>
                    </a>
                    <p>Branding</p>
                    <a className="tekup-portfolio-btn2" href="single-portfolio.html">
                      <i className="ri-arrow-right-up-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Project Item 3 */}
            <div className="col-xl-4 col-md-6">
              <div className="tekup-portfolio-wrap2" data-aos="fade-up" data-aos-duration="800">
                <div className="tekup-portfolio-thumb2">
                  <img src="/assets/images/p2/p_3.png" alt="Cyber Security Analysis" />
                  <div className="tekup-portfolio-data2">
                    <a href="single-portfolio.html">
                      <h5>Cyber Security Analysis</h5>
                    </a>
                    <p>Technology</p>
                    <a className="tekup-portfolio-btn2" href="single-portfolio.html">
                      <i className="ri-arrow-right-up-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Project Item 4 */}
            <div className="col-xl-4 col-md-6">
              <div className="tekup-portfolio-wrap2" data-aos="fade-up" data-aos-duration="1000">
                <div className="tekup-portfolio-thumb2">
                  <img src="/assets/images/p2/p_4.png" alt="Design Discussion" />
                  <div className="tekup-portfolio-data2">
                    <a href="single-portfolio.html">
                      <h5>Design Discussion</h5>
                    </a>
                    <p>Design</p>
                    <a className="tekup-portfolio-btn2" href="single-portfolio.html">
                      <i className="ri-arrow-right-up-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Project Item 5 */}
            <div className="col-xl-8 col-md-12">
              <div className="tekup-portfolio-wrap2" data-aos="fade-up" data-aos-duration="1200">
                <div className="tekup-portfolio-thumb2">
                  <img src="/assets/images/p2/p_5.png" alt="Product Security Analysis" />
                  <div className="tekup-portfolio-data2">
                    <a href="single-portfolio.html">
                      <h5>Product Security Analysis</h5>
                    </a>
                    <p>Product</p>
                    <a className="tekup-portfolio-btn2" href="single-portfolio.html">
                      <i className="ri-arrow-right-up-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tekup-center-btn">
            <a className="tekup-default-btn" href="portfolio-01.html">View All Projects <i className="ri-arrow-right-up-line"></i></a>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="section tekup-section-padding2 dark-bg">
        <div className="container">
          <div className="tekup-section-title center light-color">
            <h2>Effective & flexible pricing</h2>
          </div>
          <div className="row">
            {/* Pricing Item 1 */}
            <div className="col-xl-4 col-md-6">
              <div className="tekup-pricing-wrap" data-aos="fade-up" data-aos-duration="400">
                <div className="tekup-pricing-header">
                  <h4>Startup</h4>
                  <p>Best for Startup business owners who need a website for business.</p>
                </div>
                <div className="tekup-pricing-price">
                  <h2>$99<span>/month</span></h2>
                </div>
                <a className="tekup-pricing-btn" href="pricing.html">Select This Package <i className="ri-arrow-right-up-line"></i></a>
                <div className="tekup-pricing-feature">
                  <ul>
                    <li><i className="ri-check-line"></i>10 GB disk space availability</li>
                    <li><i className="ri-check-line"></i>50 GB NVMe SSD for use</li>
                    <li><i className="ri-check-line"></i>Free platform access for all</li>
                    <li><i className="ri-check-line"></i>Free lifetime updates facility</li>
                    <li><i className="ri-check-line"></i>Free one-year support</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Pricing Item 2 */}
            <div className="col-xl-4 col-md-6">
              <div className="tekup-pricing-wrap" data-aos="fade-up" data-aos-duration="600">
                <div className="tekup-pricing-header">
                  <h4>Business</h4>
                  <p>Best for Startup business owners who need a website for business.</p>
                </div>
                <div className="tekup-pricing-price">
                  <h2>$299<span>/month</span></h2>
                </div>
                <a className="tekup-pricing-btn active" href="pricing.html">Select This Package <i className="ri-arrow-right-up-line"></i></a>
                <div className="tekup-pricing-feature">
                  <ul>
                    <li><i className="ri-check-line"></i>10 GB disk space availability</li>
                    <li><i className="ri-check-line"></i>50 GB NVMe SSD for use</li>
                    <li><i className="ri-check-line"></i>Free platform access for all</li>
                    <li><i className="ri-check-line"></i>Free lifetime updates facility</li>
                    <li><i className="ri-check-line"></i>Free one-year support</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Pricing Item 3 */}
            <div className="col-xl-4 col-md-6">
              <div className="tekup-pricing-wrap" data-aos="fade-up" data-aos-duration="800">
                <div className="tekup-pricing-header">
                  <h4>Enterprise</h4>
                  <p>Best for Startup business owners who need a website for business.</p>
                </div>
                <div className="tekup-pricing-price">
                  <h2>$499<span>/month</span></h2>
                </div>
                <a className="tekup-pricing-btn" href="pricing.html">Select This Package <i className="ri-arrow-right-up-line"></i></a>
                <div className="tekup-pricing-feature">
                  <ul>
                    <li><i className="ri-check-line"></i>10 GB disk space availability</li>
                    <li><i className="ri-check-line"></i>50 GB NVMe SSD for use</li>
                    <li><i className="ri-check-line"></i>Free platform access for all</li>
                    <li><i className="ri-check-line"></i>Free lifetime updates facility</li>
                    <li><i className="ri-check-line"></i>Free one-year support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ClientSlider />
        <TestimonialsAndBlog />
    </>
  );
};

export default ContentPage;
