import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';

const Contact = () => {
  useEffect(() => {
    import('aos').then(AOS => {
      AOS.init();
    });
  }, []);

  return (
    <>
    <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Us - Digital Araa</title>
        <link rel="shortcut icon" href="/assets/images/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/assets/images/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.css" />
        <link rel="stylesheet" href="/assets/css/aos.css" />
        <link rel="stylesheet" href="/assets/css/remixicon.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/app.min.css" />
      </Helmet>

      <Layout>
      
  
  <header className="site-header tekup-header-section" id="sticky-menu">
    <div className="tekup-header-top bg-light1">
      <div className="container-fuild">
        <div className="tekup-header-info-wrap">
          <div className="tekup-header-info dark-color">
            <ul>
              <li>
                <i className="ri-map-pin-2-fill" />
                2774 Oak Drive, Plattsburgh, New York
              </li>
            </ul>
          </div>
          <div className="tekup-header-info dark-color">
            <ul>
              <li>
                <a href="tel:123">
                  <i className="ri-phone-fill" />
                  518-564-3200
                </a>
              </li>
              <li>
                <a href="mailto:name@email.com">
                  <i className="ri-mail-fill" />
                  mathemeus@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="tekup-header-bottom bg-white">
      <div className="container-fuild">
        <nav className="navbar site-navbar">
          {/* Brand Logo*/}
          <div className="brand-logo">
            <a href="index.html">
              <img
                src="assets/images/logo/logo-dark.svg"
                alt=""
                className="light-version-logo"
              />
            </a>
          </div>
          <div className="menu-block-wrapper">
            <div className="menu-overlay" />
            <nav className="menu-block" id="append-menu-header">
              <div className="mobile-menu-head">
                <div className="go-back">
                  <i className="fa fa-angle-left" />
                </div>
                <div className="current-menu-title" />
                <div className="mobile-menu-close">×</div>
              </div>
              <ul className="site-menu-main">
                <li className="nav-item nav-item-has-children">
                  <a href="#" className="nav-link-item drop-trigger">
                    Demo <i className="ri-arrow-down-s-line" />
                  </a>
                  <ul className="sub-menu" id="submenu-1">
                    <li className="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" className="drop-trigger">
                        OnePage <i className="fas fa-angle-down" />
                      </a>
                      <ul className="sub-menu shape-none" id="submenu-2">
                        <li className="sub-menu--item">
                          <a href="index-op-01.html">
                            <span className="menu-item-text">Home 1</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-op-02.html">
                            <span className="menu-item-text">Home 2</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-op-03.html">
                            <span className="menu-item-text">Home 3</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-op-04.html">
                            <span className="menu-item-text">Home 4</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-op-05.html">
                            <span className="menu-item-text">Home 5</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-op-06.html">
                            <span className="menu-item-text">Home 6</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-op-07.html">
                            <span className="menu-item-text">Home 7</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-op-08.html">
                            <span className="menu-item-text">Home 8</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-op-09.html">
                            <span className="menu-item-text">Home 9</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-op-10.html">
                            <span className="menu-item-text">Home 10</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" className="drop-trigger">
                        Multipage
                        <i className="fas fa-angle-down" />
                      </a>
                      <ul className="sub-menu shape-none" id="submenu-3">
                        <li className="sub-menu--item">
                          <a href="index.html">
                            <span className="menu-item-text">Home 01</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-02.html">
                            <span className="menu-item-text">home 02</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-03.html">
                            <span className="menu-item-text">home 03</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-04.html">
                            <span className="menu-item-text">home 04</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-05.html">
                            <span className="menu-item-text">home 05</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-06.html">
                            <span className="menu-item-text">home 06</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-07.html">
                            <span className="menu-item-text">home 07</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-08.html">
                            <span className="menu-item-text">home 08</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-09.html">
                            <span className="menu-item-text">home 09</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-10.html">
                            <span className="menu-item-text">home 10</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="about-us.html" className="nav-link-item">
                    About Us
                  </a>
                </li>
                <li className="nav-item nav-item-has-children">
                  <a href="#" className="nav-link-item drop-trigger">
                    Pages <i className="ri-arrow-down-s-line" />
                  </a>
                  <ul className="sub-menu" id="submenu-2">
                    <li className="sub-menu--item">
                      <a href="about-us.html">
                        <span className="menu-item-text">About Us</span>
                      </a>
                    </li>
                    <li className="sub-menu--item">
                      <a href="pricing.html">
                        <span className="menu-item-text">Pricing</span>
                      </a>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" className="drop-trigger">
                        blog <i className="ri-arrow-down-s-line" />
                      </a>
                      <ul className="sub-menu shape-none" id="submenu-3">
                        <li className="sub-menu--item">
                          <a href="blog.html">
                            <span className="menu-item-text">Blog</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="blog-grid.html">
                            <span className="menu-item-text">Blog grid</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="single-blog.html">
                            <span className="menu-item-text">blog details</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" className="drop-trigger">
                        Service
                        <i className="ri-arrow-down-s-line" />
                      </a>
                      <ul className="sub-menu shape-none" id="submenu-4">
                        <li className="sub-menu--item">
                          <a href="service.html">
                            <span className="menu-item-text">service</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="single-service.html">
                            <span className="menu-item-text">
                              service details
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" className="drop-trigger">
                        Team
                        <i className="ri-arrow-down-s-line" />
                      </a>
                      <ul className="sub-menu shape-none" id="submenu-5">
                        <li className="sub-menu--item">
                          <a href="team.html">
                            <span className="menu-item-text">team</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="single-team.html">
                            <span className="menu-item-text">team details</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" className="drop-trigger">
                        Portfolio
                        <i className="ri-arrow-down-s-line" />
                      </a>
                      <ul className="sub-menu shape-none" id="submenu-6">
                        <li className="sub-menu--item">
                          <a href="portfolio-01.html">
                            <span className="menu-item-text">
                              Portfolio Grid
                            </span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="portfolio-02.html">
                            <span className="menu-item-text">
                              Portfolio masonry
                            </span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="single-portfolio.html">
                            <span className="menu-item-text">
                              Single Portfolio
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" className="drop-trigger">
                        Utility
                        <i className="ri-arrow-down-s-line" />
                      </a>
                      <ul className="sub-menu shape-none" id="submenu-7">
                        <li className="sub-menu--item">
                          <a href="faq.html">
                            <span className="menu-item-text">faq</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="errors-404.html">
                            <span className="menu-item-text">Error 404</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="testimonial.html">
                            <span className="menu-item-text">testimonial</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" className="drop-trigger">
                        Shop
                        <i className="ri-arrow-down-s-line" />
                      </a>
                      <ul className="sub-menu shape-none" id="submenu-8">
                        <li className="sub-menu--item">
                          <a href="shop.html">
                            <span className="menu-item-text">shop</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="single-shop.html">
                            <span className="menu-item-text">Shop Details</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="my-cart.html">
                            <span className="menu-item-text">My Cart</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="checkout.html">
                            <span className="menu-item-text">Checkout</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-has-children">
                  <a href="#" className="nav-link-item drop-trigger">
                    Blog <i className="ri-arrow-down-s-line" />
                  </a>
                  <ul className="sub-menu" id="submenu-9">
                    <li className="sub-menu--item">
                      <a href="blog.html">
                        <span className="menu-item-text">blog</span>
                      </a>
                    </li>
                    <li className="sub-menu--item">
                      <a href="blog-grid.html">
                        <span className="menu-item-text">Blog grid</span>
                      </a>
                    </li>
                    <li className="sub-menu--item">
                      <a href="single-blog.html">
                        <span className="menu-item-text">blog Details</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="contact-us.html" className="nav-link-item">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
            <div className="tekup-header-icon">
              <div className="tekup-header-search">
                <i className="ri-search-line" />
              </div>
              <a
                className="tekup-default-btn tekup-header-btn"
                href="contact-us.html"
              >
                Get in Touch <i className="ri-arrow-right-up-line" />
              </a>
            </div>
          </div>
          {/* mobile menu trigger */}
          <div className="mobile-menu-trigger">
            <span />
          </div>
          {/*/.Mobile Menu Hamburger Ends*/}
        </nav>
      </div>
    </div>
    <div className="tekup-header-search-section">
      <div className="container">
        <div className="tekup-header-search-box">
          <input type="search" placeholder="Search here..." />
          <button id="header-search" type="button">
            <img src="assets/images/v1/search-dark.png" alt="" />
          </button>
          <p>Type above and press Enter to search. Press Close to cancel.</p>
        </div>
      </div>
      <div className="tekup-header-search-close">
        <i className="ri-close-line" />
      </div>
    </div>
  </header>
  <div className="search-overlay" />
  {/*End landex-header-section */}
  <div
    className="tekup-breadcrumb"
    style={{ backgroundImage: "url(assets/images/breadcrumb/breadcrumb.png)" }}
  >
    <div className="container">
      <h1 className="post__title">Contact us</h1>
      <nav className="breadcrumbs">
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li aria-current="page"> Contact us</li>
        </ul>
      </nav>
    </div>
  </div>
  {/* End breadcrumb */}
  <div className="section tekup-section-padding">
    <div className="container">
      <div className="row">
        <div className="col-xl-5 col-lg-6 d-flex align-items-center">
          <div className="tekup-default-content">
            <h2>Let’s build an awesome project together</h2>
            <p>
              At our IT solution company, we are committed to exceptional
              customer service and support. If you are experiencing technical
              difficulties or need assistance with
            </p>
            <div className="tekup-contact-info-wrap wrap2">
              <div className="tekup-contact-info mb-0">
                <i className="ri-map-pin-2-fill" />
                <h5>Address</h5>
                <p>
                  1791 Yorkshire Circle Kitty
                  <br />
                  Hawk, NC 279499
                </p>
              </div>
              <div className="tekup-contact-info mb-0">
                <i className="ri-mail-fill" />
                <h5>Contact</h5>
                <a href="mailto:name@email.com">info@mthemeus.com</a>
                <a href="tel:123">518-564-3200</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 offset-xl-1 col-lg-6">
          <div className="tekup-main-form">
            <h3>Fill The Contact Form</h3>
            <p>Feel free to contact with us, we don’t spam your email</p>
            <form action="#">
              <div className="row">
                <div className="col-lg-6">
                  <div className="tekup-main-field">
                    <input type="text" placeholder="Your name" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tekup-main-field">
                    <input type="number" placeholder="Phone number" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="tekup-main-field">
                    <input type="email" placeholder="Email address" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="tekup-main-field">
                    <textarea
                      name="textarea"
                      placeholder="Write your message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <button id="tekup-main-form-btn" type="button">
                    Send Message <i className="ri-arrow-right-up-line" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End section */}
  <div id="map" />
      </Layout>
    </>
  );
};

export default Contact;
