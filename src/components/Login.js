import React, { useState } from 'react';
import './styles/login.css';

const Login = ({ changePage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setErrorEmail(false);
      setErrorPassword(false);

      const data = {
        email: email,
        password: password
      };

      const response = await fetch('https://sneaky-sleepy-moustache.glitch.me/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const result = await response.text();

        if (result === 'ok') {
          setErrorPassword(true); // Indicates successful login
        } else {
          setErrorEmail(true); // Indicates an incorrect email or username
        }
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <div className='body'>
      <div className="login-container">
        <h1 className='title'>Login</h1>
        <p className="Message">
          <span className="red-asterisk">*</span>Only for Al-Khidma Movement Members
        </p>
        <form id='loginForm' onSubmit={handleSubmit}>
          <input
            type="email"
            className="input-field"
            placeholder="Enter your Username or Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorEmail && (
            <p className="errorEmail" style={{ display: errorEmail ? 'flex' : 'none' }}>
              <span className="red-asterisk">*</span>
              Wrong email or username
              <span className="red-asterisk">*</span>
            </p>
          )}
          <input
            type="password"
            className="input-field"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorPassword && (
            <p className="errorPassword" style={{ display: errorPassword ? 'flex' : 'none' }}>
              <span className="red-asterisk">*</span>Wrong password
              <span className="red-asterisk">*</span>
            </p>
          )}
          <input type="submit" value="Sign in" id="sb" />
        </form>
        <a href="#" className="homepage-link" onClick={() => changePage('about')}>
          <span className="red-asterisk">&lt;&lt;</span> Go back to homepage
        </a>
      </div>
    </div>
  );
};

export default Login;