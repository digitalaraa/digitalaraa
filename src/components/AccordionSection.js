// src/components/AccordionSection.js

import React, { useState } from 'react';
import './AccordionSection.css'; // Import the CSS file for custom styles

const AccordionSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "What is your return policy?", answer: "Our return policy lasts 30 days. If you are not satisfied with your purchase, you can return it for a full refund." },
    { question: "Do you offer technical support?", answer: "Yes, we offer 24/7 technical support via phone, email, and live chat." },
    { question: "How can I track my order?", answer: "You can track your order through our website by entering your tracking number." },
    { question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, and bank transfers." },
    { question: "Do you ship internationally?", answer: "Yes, we ship to many countries worldwide." }
  ];

  return (
    <div className="accordion" id="faqAccordion">
      {faqs.map((faq, index) => (
        <div key={index} className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
            >
              {faq.question}
            </button>
          </h2>
          <div
            className={`accordion-collapse ${openIndex === index ? 'show' : ''}`}
          >
            <div className="accordion-body">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionSection;
