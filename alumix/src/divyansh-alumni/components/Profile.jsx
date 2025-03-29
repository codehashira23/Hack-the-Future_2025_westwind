import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    position: 'Senior Software Engineer',
    company: 'Tech Corp',
    yearsOfExperience: '5',
    location: 'New York, NY',
    expertise: ['Web Development', 'Cloud Computing', 'System Design'],
    skills: ['React', 'Node.js', 'AWS', 'Python'],
    socialLinks: {
      linkedin: 'linkedin.com/in/johndoe',
      github: 'github.com/johndoe',
      twitter: '@johndoe'
    }
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically make an API call to save the changes
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Professional Profile</h2>
        {!isEditing ? (
          <button onClick={handleEdit} className="edit-button">
            Edit Profile
          </button>
        ) : (
          <button onClick={handleSave} className="save-button">
            Save Changes
          </button>
        )}
      </div>

      <div className="profile-content">
        {/* Professional Details Section */}
        <div className="profile-section">
          <h3>Professional Details</h3>
          <div className="info-grid">
            <div className="info-item">
              <label>Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleChange}
                />
              ) : (
                <p>{profileData.name}</p>
              )}
            </div>
            <div className="info-item">
              <label>Email</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                />
              ) : (
                <p>{profileData.email}</p>
              )}
            </div>
          </div>
        </div>

        {/* Company & Position Section */}
        <div className="profile-section">
          <h3>Company & Position</h3>
          <div className="info-grid">
            <div className="info-item">
              <label>Current Position</label>
              {isEditing ? (
                <input
                  type="text"
                  name="position"
                  value={profileData.position}
                  onChange={handleChange}
                />
              ) : (
                <p>{profileData.position}</p>
              )}
            </div>
            <div className="info-item">
              <label>Company</label>
              {isEditing ? (
                <input
                  type="text"
                  name="company"
                  value={profileData.company}
                  onChange={handleChange}
                />
              ) : (
                <p>{profileData.company}</p>
              )}
            </div>
            <div className="info-item">
              <label>Years of Experience</label>
              {isEditing ? (
                <input
                  type="text"
                  name="yearsOfExperience"
                  value={profileData.yearsOfExperience}
                  onChange={handleChange}
                />
              ) : (
                <p>{profileData.yearsOfExperience} years</p>
              )}
            </div>
            <div className="info-item">
              <label>Location</label>
              {isEditing ? (
                <input
                  type="text"
                  name="location"
                  value={profileData.location}
                  onChange={handleChange}
                />
              ) : (
                <p>{profileData.location}</p>
              )}
            </div>
          </div>
        </div>

        {/* Expertise & Skills Section */}
        <div className="profile-section">
          <h3>Expertise & Skills</h3>
          <div className="expertise-container">
            <div className="expertise-group">
              <label>Areas of Expertise</label>
              <div className="tag-container">
                {profileData.expertise.map((item, index) => (
                  <span key={index} className="expertise-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="expertise-group">
              <label>Technical Skills</label>
              <div className="tag-container">
                {profileData.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="profile-section">
          <h3>Social Links</h3>
          <div className="social-links">
            {Object.entries(profileData.socialLinks).map(([platform, link]) => (
              <div key={platform} className="social-item">
                <label>{platform}</label>
                {isEditing ? (
                  <input
                    type="text"
                    name={`socialLinks.${platform}`}
                    value={link}
                    onChange={handleChange}
                  />
                ) : (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {link}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 