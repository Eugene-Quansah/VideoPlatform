import React, { useState } from 'react'
import './ResetPassword.css';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
     
    const handleSubmit = (e) =>{
        e.preventDefault();

        // (===)It checks whether the two operands are equal in both value and type.
        if (password === confirmPassword) {
            console.log('Email:', email);
            console.log('Password:', password);
            setMessage('Password reset successfully!');
          } else {
            setMessage('Passwords do not match!');
          }
    }
    return (
        <div className="resetPassword-container">
          <h2>Reset Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit</button>
            {message && <p>{message}</p>}
          </form>
        </div>
      );
    };
    
    export default ResetPassword;