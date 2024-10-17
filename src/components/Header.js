// import React from 'react';
// import { Link } from 'gatsby';

// const Header = () => {
//   return (
//     <header className="site-header tekup-header-section" id="sticky-menu">
//       <div className="tekup-header-top bg-light1">
//         <div className="container-fluid">
//           <div className="tekup-header-info-wrap">
//             <div className="tekup-header-info dark-color">
//               <ul>
//                 <li><i className="ri-map-pin-2-fill"></i>Coimbatore, Tamilnadu, India.</li>
//               </ul>
//             </div>
//             <div className="tekup-header-info dark-color">
//               <ul>
//                 <li><a href="tel:919843442155"><i className="ri-phone-fill"></i>9843442155</a></li>
//                 <li><a href="mailto:digitalaraa@gmail.com"><i className="ri-mail-fill"></i>digitalaraa@gmail.com</a></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="tekup-header-bottom bg-white">
//         <div className="container-fluid">
//           <nav className="navbar site-navbar">
//             <div className="brand-logo">
//               <Link to="/">
//                 <img src="/" alt="Logo" className="light-version-logo" />
//               </Link>
//             </div>

//             <div className="menu-block-wrapper">
//               <div className="menu-overlay"></div>
//               <nav className="menu-block" id="append-menu-header">
//                 <div className="mobile-menu-head">
//                   <div className="go-back">
//                     <i className="fa fa-angle-left"></i>
//                   </div>
//                   <div className="current-menu-title"></div>
//                   <div className="mobile-menu-close">&times;</div>
//                 </div>
//                 <ul className="site-menu-main">
//                   <li className="nav-item nav-item-has-children">
//                     <Link to="/" className="nav-link-item drop-trigger">Demo <i className="ri-arrow-down-s-line"></i></Link>
//                     <ul className="sub-menu" id="submenu-1">
//                       <li className="sub-menu--item nav-item-has-children">
//                         <Link to="#" className="drop-trigger">OnePage <i className="fas fa-angle-down"></i></Link>
//                         <ul className="sub-menu shape-none" id="submenu-2">
//                           <li className="sub-menu--item"><Link to="/"><span className="menu-item-text">Home 1</span></Link></li>
//                           {/* Add more links as needed */}
//                         </ul>
//                       </li>
//                       <li className="sub-menu--item nav-item-has-children">
//                         <Link to="#" className="drop-trigger">Multipage<i className="fas fa-angle-down"></i></Link>
//                         <ul className="sub-menu shape-none" id="submenu-3">
//                           <li className="sub-menu--item"><Link to="/"><span className="menu-item-text">Home 01</span></Link></li>
//                           {/* Add more links as needed */}
//                         </ul>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className="nav-item"><Link to="/about" className="nav-link-item">About Us</Link></li>
//                   <li className="nav-item nav-item-has-children">
//                     <Link to="#" className="nav-link-item drop-trigger">Pages <i className="ri-arrow-down-s-line"></i></Link>
//                     <ul className="sub-menu" id="submenu-2">
//                       <li className="sub-menu--item">
//   <Link to="/about/"><span className="menu-item-text">About Us</span></Link>
// </li>
//                       <li className="sub-menu--item"><Link to="/pricing"><span className="menu-item-text">Pricing</span></Link></li>
//                       {/* Add more pages and submenus as needed */}
//                     </ul>
//                   </li>
//                   <li className="nav-item"><Link to="/contact-us" className="nav-link-item">Contact Us</Link></li>
//                 </ul>
//               </nav>
//             </div>

//             <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
//               <div className="tekup-header-icon">
//                 <div className="tekup-header-search">
//                   <i className="ri-search-line"></i>
//                 </div>
//                 <Link className="tekup-default-btn tekup-header-btn" to="/contact-us">Get in Touch <i className="ri-arrow-right-up-line"></i></Link>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';import { Link } from 'gatsby';

import digitalaraaLogo from '../../static/assets/images/logo/digitalaraa-logo.png'; // Ensure to include the file extension



const Header = () => {

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Whether animation should happen only once
    });

    // Function to check if an element is in the viewport
    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Function to trigger animation
    const triggerAnimation = () => {
      const elements = document.querySelectorAll('[data-aos]');

      elements.forEach((el) => {
        if (isElementInViewport(el)) {
          el.classList.add('aos-init');
          el.classList.add('aos-animate');
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', triggerAnimation);

    // Initial check on load
    triggerAnimation();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', triggerAnimation);
    };
  }, []);

  return (
    <header className="site-header tekup-header-section site-header--menu-right dark-color" id="sticky-menu">
      <div className="tekup-header-top bg-accent">
        <div className="container-fluid">
          <div className="tekup-header-info-wrap">
            <div className="tekup-header-info">
              <ul>
                <li><i className="ri-map-pin-2-fill"></i>Coimbatore, Tamilnadu, India.</li>
              </ul>
            </div>
            <div className="tekup-header-info">
              <ul>
                <li><a href="tel:919843442155"><i className="ri-phone-fill"></i>9843442155</a></li>
                <li><a href="mailto:digitalaraa@gmail.com"><i className="ri-mail-fill"></i>digitalaraa@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="tekup-header-bottom bg-white">
        <div className="container-fluid">
          <nav className="navbar site-navbar">
            <div className="brand-logo">
              <Link to="/">
                {/* <img src="/" alt="Logo" className="light-version-logo" /> */}
                <img src={digitalaraaLogo} alt="Digital Araa Logo" />

              </Link>
            </div>

            <div className="menu-block-wrapper">
              <div className="menu-overlay"></div>
              <nav className="menu-block" id="append-menu-header">
                <div className="mobile-menu-head">
                  <div className="go-back">
                    <i className="fa fa-angle-left"></i>
                  </div>
                  <div className="current-menu-title"></div>
                  <div className="mobile-menu-close">&times;</div>
                </div>
                <ul className="site-menu-main">
                  {/* <li className="nav-item nav-item-has-children">
                    <Link to="/" className="nav-link-item drop-trigger">Demo <i className="ri-arrow-down-s-line"></i></Link>
                    <ul className="sub-menu" id="submenu-1">
                      <li className="sub-menu--item nav-item-has-children">
                        <Link to="#" className="drop-trigger">OnePage <i className="fas fa-angle-down"></i></Link>
                        <ul className="sub-menu shape-none" id="submenu-2">
                          <li className="sub-menu--item"><Link to="/"><span className="menu-item-text">Home 1</span></Link></li>
                        </ul>
                      </li>
                      <li className="sub-menu--item nav-item-has-children">
                        <Link to="#" className="drop-trigger">Multipage<i className="fas fa-angle-down"></i></Link>
                        <ul className="sub-menu shape-none" id="submenu-3">
                          <li className="sub-menu--item"><Link to="/"><span className="menu-item-text">Home 01</span></Link></li>
                        </ul>
                      </li>
                    </ul>
                  </li> */}
                  {/* Direct About Us link */}
                  <li className="nav-item"><Link to="/" className="nav-link-item">Home</Link></li>
                  <li className="nav-item"><Link to="/about/" className="nav-link-item">About Us</Link></li>
                  {/* <li className="nav-item nav-item-has-children">
                    <Link to="#" className="nav-link-item drop-trigger">Pages <i className="ri-arrow-down-s-line"></i></Link>
                    <ul className="sub-menu" id="submenu-2">
                      <li className="sub-menu--item"><Link to="/about/"><span className="menu-item-text">About Us</span></Link></li>
                      <li className="sub-menu--item"><Link to="/pricing"><span className="menu-item-text">Pricing</span></Link></li>
                    </ul>
                  </li> */}
                  <li className="nav-item"><Link to="/services" className="nav-link-item"> Our Services</Link></li>
                  <li className="nav-item"><Link to="/faq" className="nav-link-item"> Faq</Link></li>
                  <li className="nav-item"><Link to="/contact" className="nav-link-item">Contact Us</Link></li>
                </ul>
              </nav>
            </div>

            <div className="header-btn header-btn-l1 ms-auto d-xs-inline-flex">
              <div className="tekup-header-icon">
                <div className="tekup-header-search">
                  {/* <i className="ri-search-line"></i> */}
                </div>
                <Link className="tekup-default-btn tekup-header-btn" to="/contact-us">Get in Touch <i className="ri-arrow-right-up-line"></i></Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
