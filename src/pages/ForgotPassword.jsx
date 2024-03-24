import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    try {
      if (!username.trim()) {
        setError('Please enter your email.');
        return;
      }

      if (!emailPattern.test(username)) {
        setError('Please enter a valid Gmail address.');
        return;
      }

      if (!newPassword.trim()) {
        setError('Please enter a new password.');
        return;
      }

      if (newPassword.length < 8) {
        setError('Password must be at least 8 characters long.');
        return;
      }

      if (newPassword !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }

      const response = await fetch('http://localhost:3000/resetPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: username, newPassword }),
      });

      if (response.ok) {
        setSuccessMessage('Password reset successful.');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'An error occurred. Please try again later.');
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='forgotpassword-container'>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit} className='forgotpassword-form'>
        <div>
          <label className='forgotpassword-label'>Email:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='forgotpassword-label'>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='forgotpassword-label'>Confirm New Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit" className='forgotpassword-button'>Reset Password</button>
        </div>
      </form>
      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      <Link to="/" className='forgotpassword-link'>Login</Link>
    </div>
  );
}

export default ForgotPassword;
