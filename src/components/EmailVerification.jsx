import React, { useState } from 'react';
import './EmailVerification.css'; // Import the CSS file

const EmailVerification = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [message, setMessage] = useState('');

  const handleSendVerification = async () => {
    // Simulate sending a verification code to the user's email
    try {
      // Replace this with your API call to send the verification code
      console.log('Sending verification code to:', email);
      setMessage('Verification code sent to your email.');
    } catch (error) {
      console.error('Error sending verification code:', error);
      setMessage('Failed to send verification code.');
    }
  };

  const handleVerifyCode = async () => {
    // Simulate verifying the code entered by the user
    try {
      // Replace this with your API call to verify the code
      console.log('Verifying code:', verificationCode);
      setMessage('Email verified successfully!');
    } catch (error) {
      console.error('Error verifying code:', error);
      setMessage('Invalid verification code.');
    }
  };

  return (
    <div className="email-verification-container">
      <h2>Email Verification</h2>
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
      <button onClick={handleSendVerification}>Send Verification Code</button>

      <div className="form-group">
        <label htmlFor="verificationCode">Verification Code:</label>
        <input
          type="text"
          id="verificationCode"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          required
        />
      </div>
      <button onClick={handleVerifyCode}>Verify Code</button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default EmailVerification;
