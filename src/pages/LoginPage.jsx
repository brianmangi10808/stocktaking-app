import React, { useState } from 'react';
import './LoginPage.css'

function LoginPage() {
  return(
    <div className="login-wrapper">
      <h1>Sign In</h1>
      <form>
        <label>
          <p>Username:</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password:</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage