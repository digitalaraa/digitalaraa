import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TestimonialsAndBlog from "./TestimonialsAndBlog";
//import ClientSlider from './ClientSlider'; // Adjust the path as needed
import PricingSection from './PricingSection'; // Adjust the path as needed

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
      <PricingSection />
        <TestimonialsAndBlog />
    </>
  );
};

export default ContentPage;
