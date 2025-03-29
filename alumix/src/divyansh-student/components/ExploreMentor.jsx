import React from 'react';
import './ExploreMentor.css';

const ExploreMentor = () => {
  const mentors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      expertise: 'Machine Learning',
      company: 'Google AI',
      experience: '10+ years',
      bio: 'Experienced ML engineer and mentor. Passionate about helping students grow in AI.',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Michael Chen',
      expertise: 'Web Development',
      company: 'Microsoft',
      experience: '8 years',
      bio: 'Full-stack developer specializing in React and Node.js. Love mentoring new developers.',
      image: 'https://via.placeholder.com/150'
    },
    // Add more mentors as needed
  ];

  const handleBecomeMentee = (mentorId) => {
    // Handle mentor request logic here
    console.log(`Request sent to mentor ${mentorId}`);
  };

  return (
    <div className="explore-mentor">
      <h2>Find Your Mentor</h2>
      <div className="mentors-grid">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="mentor-card">
            <div className="mentor-image">
              <img src={mentor.image} alt={mentor.name} />
            </div>
            <div className="mentor-info">
              <h3>{mentor.name}</h3>
              <p className="expertise">{mentor.expertise}</p>
              <p className="company">{mentor.company}</p>
              <p className="experience">{mentor.experience} experience</p>
              <p className="bio">{mentor.bio}</p>
              <button 
                className="mentee-button"
                onClick={() => handleBecomeMentee(mentor.id)}
              >
                Become My Mentor
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMentor; 