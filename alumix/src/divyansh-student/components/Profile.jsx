import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [studentData, setStudentData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    university: 'University of Technology',
    major: 'Computer Science',
    year: 'Junior',
    bio: 'Passionate about web development and machine learning. Looking for mentorship opportunities.',
    skills: ['React', 'JavaScript', 'Python', 'Machine Learning'],
    interests: ['Web Development', 'AI/ML', 'Cloud Computing']
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically make an API call to save the changes
    console.log('Saving changes:', studentData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Student Profile</h2>
        {!isEditing ? (
          <button className="edit-button" onClick={handleEdit}>Edit Profile</button>
        ) : (
          <button className="save-button" onClick={handleSave}>Save Changes</button>
        )}
      </div>

      <div className="profile-content">
        <div className="profile-section">
          <h3>Personal Information</h3>
          <div className="info-grid">
            <div className="info-item">
              <label>Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={studentData.name}
                  onChange={handleChange}
                />
              ) : (
                <p>{studentData.name}</p>
              )}
            </div>
            <div className="info-item">
              <label>Email</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={studentData.email}
                  onChange={handleChange}
                />
              ) : (
                <p>{studentData.email}</p>
              )}
            </div>
            <div className="info-item">
              <label>University</label>
              {isEditing ? (
                <input
                  type="text"
                  name="university"
                  value={studentData.university}
                  onChange={handleChange}
                />
              ) : (
                <p>{studentData.university}</p>
              )}
            </div>
            <div className="info-item">
              <label>Major</label>
              {isEditing ? (
                <input
                  type="text"
                  name="major"
                  value={studentData.major}
                  onChange={handleChange}
                />
              ) : (
                <p>{studentData.major}</p>
              )}
            </div>
            <div className="info-item">
              <label>Year</label>
              {isEditing ? (
                <select name="year" value={studentData.year} onChange={handleChange}>
                  <option value="Freshman">Freshman</option>
                  <option value="Sophomore">Sophomore</option>
                  <option value="Junior">Junior</option>
                  <option value="Senior">Senior</option>
                </select>
              ) : (
                <p>{studentData.year}</p>
              )}
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h3>Bio</h3>
          {isEditing ? (
            <textarea
              name="bio"
              value={studentData.bio}
              onChange={handleChange}
              rows="4"
            />
          ) : (
            <p>{studentData.bio}</p>
          )}
        </div>

        <div className="profile-section">
          <h3>Skills</h3>
          <div className="skills-list">
            {studentData.skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="profile-section">
          <h3>Interests</h3>
          <div className="interests-list">
            {studentData.interests.map((interest, index) => (
              <span key={index} className="interest-tag">{interest}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 