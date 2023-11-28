"use client";

import React, { useContext, useState } from 'react';
import { AuthContext } from './app'; // Update the path accordingly

export default function Home() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('authToken', data.token);
      login(); // This will set isLoggedIn to true
      const element = document.getElementById('loggedin');
      if (element) {
          element.textContent = "Logged in";
      }
    } else {
      console.error('Login failed');
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
          <a href="#home">
            {" "}
            <img
              src="/kleos_logo.png"
              alt="Home"
              className="center"
            />
          </a>
          </div>
        </div>
        <div className="row">
          <div className="col">
          {isLoggedIn && (
            <button onClick={logout}>Logout</button>
          )}
          <div className="login">
            <div className="heading">
              <h2 id="signin">Sign in</h2>
              <form onSubmit={handleLogin}>
                <div className="input-group-lg">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="input-group-lg">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <input type="submit" value="Login" id="loginButton" />
              </form>
              <p id="loggedin">Not logged in</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}