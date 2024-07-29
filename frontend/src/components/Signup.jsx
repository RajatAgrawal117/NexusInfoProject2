import React, { useState } from 'react';
import axios from '../Axios';
import './Signup.css';
import NavigationBar from './Navbar';

function Signup({ setUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://127.0.0.1:4000/api/auth/signup`, {
        name,
        password,
        email
        
      });
      setSuccess('Signup successful! You can now log in.');
      setError('');
      setUser(response.data.user); // Optionally set the user state
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.message || 'Signup failed. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="signup-container">
      <header>
        <NavigationBar />
      </header>
      <div className="signup-form">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
