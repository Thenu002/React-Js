import React, { useState } from 'react';
import './SignupForm.css';
const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState(''); // You may want to use useState('male') for default value
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = () => {
    // Implement authentication logic here
    console.log('Logging in with:', { name, email, gender, dob, password, confirmPassword });
    // You can make API calls to a backend server for authentication
  };

  return (
    <div className="container">
      <div className="image">
        <img src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1c2luZXNzfGVufDB8fDB8fHww" alt="signin" />
      </div>
      <div className="details">
        <h1>Sign In</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label>Gender:</label>
          <div>
            <input type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={() => setGender('male')} required />
            <label htmlFor="male" className="gender-label">Male</label>

            <input type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={() => setGender('female')} required />
            <label htmlFor="female" className="gender-label">Female</label>

            <input type="radio" id="oth" name="gender" value="oth" checked={gender === 'oth'} onChange={() => setGender('oth')} required /><br></br>
            <label htmlFor="oth" className="gender-label">Others</label>
          </div>
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" value={dob} onChange={(e) => setDob(e.target.value)} required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

          <center>
            <button type="button" onClick={handleLogin}>
              Sign In
            </button>
          </center>
         
        </form>
       
      </div>
    </div>
  );
};

export default SignupForm;
