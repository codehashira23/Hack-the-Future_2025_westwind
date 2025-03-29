import React, { useState } from 'react';
import './Posts.css';

const Posts = () => {
  const [newPost, setNewPost] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'John Doe',
      content: 'Just finished my first React project!',
      timestamp: '2 hours ago',
      likes: 5,
      comments: 2
    },
    // Add more sample posts as needed
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        author: 'Current User',
        content: newPost,
        timestamp: 'Just now',
        likes: 0,
        comments: 0
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  return (
    <div className="posts-container">
      <div className="post-form">
        <form onSubmit={handleSubmit}>
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Share your thoughts with the community..."
            className="post-input"
          />
          <button type="submit" className="post-button">Post</button>
        </form>
      </div>

      <div className="posts-list">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <div className="post-author">{post.author}</div>
              <div className="post-timestamp">{post.timestamp}</div>
            </div>
            <div className="post-content">{post.content}</div>
            <div className="post-actions">
              <button className="action-button">
                <span>👍</span> {post.likes}
              </button>
              <button className="action-button">
                <span>💬</span> {post.comments}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts; 