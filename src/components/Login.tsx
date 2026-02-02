import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services/auth-service';


const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Get the navigate function from react-router-dom


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Login submitted:', { email, password });
    const authResponse = await login(email, password);
    if (authResponse) {
      // Handle successful login (e.g., update global state, redirect the user)
      console.log('Login successful! Token:', authResponse.response);
      navigate('/'); // Redirect to the homepage or dashboard
    } else {
      // Handle failed login (e.g., display an error message)
      console.log('Login failed. Please check credentials.');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Log In</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;