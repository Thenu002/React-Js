import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [name, setName] = useState('');
  
  const [password, setPassword] = useState('');
  

  const handleLogin = () => {
    // Implement authentication logic here
    console.log('Logging in with:', { name, password });
    // You can make API calls to a backend server for authentication
  };

  return (
    <div className="container">
      <div className="image">
        <img src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1c2luZXNzfGVufDB8fDB8fHww" alt="signin" />
      </div>
      <div className="details">
        <h1>Log In</h1>
        <br></br>
        <br></br>
        <form>
          <label htmlFor="name">UserName/Email:</label>
         <br></br>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required /><br></br>

         
         
          <label htmlFor="password">Password:</label>
          <br></br>
         
          
          
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

         
          
        </form>
          <center>
          <button type="submit">Login</button>
          </center>
          
          <p>
        <h3>Don't have an account?{' '}
        <Link to="/signup">SignUp</Link></h3>
      </p>
      </div>
    </div>
  );
};

export default LoginPage;
