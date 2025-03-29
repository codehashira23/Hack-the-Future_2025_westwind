import React, { useState } from "react";
import "./dashboard.css"; // Ensure it includes styles for sections

export const Posts = () => {
  const [posts, setPosts] = useState([
    { id: 1, user: "Alice", content: "Excited for the upcoming tech fest!" },
    { id: 2, user: "Bob", content: "Looking for a study group for DSA!" },
  ]);

  return (
    <div className="posts-section">
      <h2>College Community</h2>
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <strong>{post.user}</strong>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export const ExploreMentor = () => {
  const mentors = [
    { id: 1, name: "Dr. John Doe", expertise: "Machine Learning" },
    { id: 2, name: "Ms. Jane Smith", expertise: "Cybersecurity" },
  ];

  return (
    <div className="mentor-section">
      <h2>Explore Mentors</h2>
      {mentors.map((mentor) => (
        <div key={mentor.id} className="mentor-card">
          <strong>{mentor.name}</strong>
          <p>Expertise: {mentor.expertise}</p>
        </div>
      ))}
    </div>
  );
};

export const Profile = () => {
  const [interests, setInterests] = useState(["CSS", "JavaScript", "UI/UX"]);

  const handleAddInterest = () => {
    const newInterest = prompt("Enter a new interest:");
    if (newInterest) {
      setInterests([...interests, newInterest]);
    }
  };

  return (
    <div className="profile-section">
      <h2>My Profile</h2>
      <h3>Interests & Skills</h3>
      <ul>
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
      <button onClick={handleAddInterest}>Add Interest</button>
    </div>
  );
};
