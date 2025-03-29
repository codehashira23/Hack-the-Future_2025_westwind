import React, { useState } from 'react';
import './Mentorship.css';

const Mentorship = () => {
  const [mentorshipRequests, setMentorshipRequests] = useState([
    {
      id: 1,
      studentName: 'John Doe',
      course: 'Computer Science',
      year: '3rd Year',
      interests: ['Web Development', 'AI/ML'],
      message: 'I would like to learn from your experience in web development...',
      status: 'pending'
    },
    {
      id: 2,
      studentName: 'Jane Smith',
      course: 'Information Technology',
      year: '2nd Year',
      interests: ['Data Science', 'Machine Learning'],
      message: 'Looking for guidance in data science career path...',
      status: 'pending'
    }
  ]);

  const handleAccept = (id) => {
    setMentorshipRequests(requests =>
      requests.map(request =>
        request.id === id ? { ...request, status: 'accepted' } : request
      )
    );
  };

  const handleDecline = (id) => {
    setMentorshipRequests(requests =>
      requests.filter(request => request.id !== id)
    );
  };

  return (
    <div className="mentorship-container">
      <h2>Mentorship Requests</h2>
      <div className="requests-grid">
        {mentorshipRequests.map((request) => (
          <div key={request.id} className="request-card">
            <div className="request-header">
              <h3>{request.studentName}</h3>
              <span className={`status ${request.status}`}>
                {request.status}
              </span>
            </div>
            
            <div className="request-details">
              <p><strong>Course:</strong> {request.course}</p>
              <p><strong>Year:</strong> {request.year}</p>
              <p><strong>Interests:</strong> {request.interests.join(', ')}</p>
              <p className="message">{request.message}</p>
            </div>

            {request.status === 'pending' && (
              <div className="action-buttons">
                <button 
                  className="accept-button"
                  onClick={() => handleAccept(request.id)}
                >
                  Accept Request
                </button>
                <button 
                  className="decline-button"
                  onClick={() => handleDecline(request.id)}
                >
                  Decline
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentorship; 