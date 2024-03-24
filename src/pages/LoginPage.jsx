import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = () => {
  };

  const onButtonClick = async () => {
    setEmailError("");
    setPasswordError("");

    if (email.trim() === "") {
      setEmailError("Please enter your email");
      return;
    }

    if (password.trim() === "") {
      setPasswordError("Please enter a password");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password
      });

      console.log("Logged in successfully:", response.data);

      navigate('/NextPage');
    } catch (error) {
      console.error("Login error:", error);
      setEmailError("Invalid email or password");
    }
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input
            value={email}
            placeholder='Enter email address here'
            onChange={ev => setEmail(ev.target.value)}
            className={"user-box"}
          />
          <label className='errorLabel'>{emailError}</label>
        </div>
        <div className="user-box">
          <input
            value={password}
            placeholder='Enter password here'
            onChange={ev => setPassword(ev.target.value)}
            className={'user-box'}
            type="password"
          />
          <label className='errorLabel'>{passwordError}</label>
        </div>
        <input onClick={onButtonClick}
               className={"inputButton"}
               type="button"
               value={"Submit"}
        />
        <Link to="/ForgotPassword" className='forgot-container' onClick={handleForgotPassword}>Forgot Password?</Link>
      </form>
    </div>
  );
}

export default LoginPage;
