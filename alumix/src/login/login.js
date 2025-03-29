import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

function SignInForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setError("");

    try {
      const response = await fetch('http://localhost:3001/api/v1/students/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store the token in localStorage
      localStorage.setItem('token', data.token);
      
      // Redirect to dashboard or home page
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'An error occurred during login');
    }
  };

  return (
    <div className="login-container">
      <div className="form-container sign-in-container">
        <form onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          {error && <div className="error-message">{error}</div>}
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="sign-in-button">Sign In</button>
          <div className="form-footer">
            <p>Don't have an account?</p>
            <Link to="/signup" className="sign-up-link">
              <button type="button" className="ghost-button">Sign Up</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;