import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.get(`http://localhost:3000/users email=${email}&password=${password}`);
      const userData = response.data[0];

      if (!userData) {
        throw new Error("Invalid email or password");
      }

      setUserData(userData);
      setLoggedIn(true);
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  };

  const logout = () => {
    setLoggedIn(false);
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
