import React from "react";
import "../styles/FAQ.css";

const FAQ = () => {
  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="questions">
        <div className="question">
          <h3>How does mentorship work?</h3>
          <p>You sign up, choose a mentor, and start learning.</p>
        </div>
        <div className="question">
          <h3>Is there a fee?</h3>
          <p>Some programs are free, while others may have charges.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
