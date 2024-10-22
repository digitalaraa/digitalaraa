// src/components/NewsletterSubscription.js

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      email: email, // Change this according to your EmailJS template
    };

    emailjs.send('service_b17kfg2', 'template_wvj1h9p', templateParams, 'iz1N0uoVjI_Z8UCdb')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
        setMessage('Thank you for subscribing!');
        setEmail('');

        // Hide message after 3 seconds
        setTimeout(() => {
          setMessage('');
          setSuccess(false);
        }, 3000);
      }, (error) => {
        console.log('FAILED...', error);
        setSuccess(false);
        setMessage('Subscription failed. Please try again.');

        // Hide message after 3 seconds
        setTimeout(() => {
          setMessage('');
        }, 3000);
      });
  };

  return (
    <div className="col-xl-3 col-md-5">
      <div className="tekup-footer-title light-color">
        <h5>Subscribe Our Newsletter</h5>
        <p>Get ready to work together for the better solution for your business</p>
      </div>
      <div className="tekup-subscription">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button id="tekup-subscription-btn" type="submit">
            <i className="ri-send-plane-fill"></i>
          </button>
        </form>
        {message && <p className={success ? "success-message" : "error-message"}>{message}</p>}
      </div>
    </div>
  );
};

export default NewsletterSubscription;
