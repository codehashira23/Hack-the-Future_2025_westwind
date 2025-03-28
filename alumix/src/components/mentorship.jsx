import React from "react";
import "../styles/mentorship.css";

const Mentorship = () => {
  return (
    <div className="mentorship">
      <h2>Our Mentorship Programs</h2>
      <div className="programs">
        <div className="program">
          <h3>Beginner Mentorship</h3>
          <p>Perfect for students and freshers entering the industry.</p>
        </div>
        <div className="program">
          <h3>Intermediate Mentorship</h3>
          <p>For professionals looking to switch careers or upskill.</p>
        </div>
        <div className="program">
          <h3>Advanced Mentorship</h3>
          <p>Ideal for those aiming for leadership and expert roles.</p>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
