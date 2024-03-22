
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function NextPage() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/'); 
  };

  return (
    <div>
      <h1>Welcome to the Next Page!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default NextPage;
