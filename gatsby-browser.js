/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import $ from 'jquery';
import 'jquery-ui/ui/effects/effect-slide'; // If you need any specific jQuery UI effects

// // gatsby-browser.js
//  import './static/assets/css/bootstrap.min.css';
//  import './static/assets/css/main.css';
//  import './static/assets/css/app.min.css';

export const onRouteUpdate = ({ location, prevLocation }) => {
    // Scroll to the top of the page when the route changes
    window.scrollTo(0, 0);
  };