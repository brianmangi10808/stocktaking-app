import React from 'react'

const Homes = () => {
const  logout = () =>{
    localStorage.removeItem("signUp")
    window.location.reload
}
const  deleteAccount = () =>{
    localStorage.clear()
    window.location.reload
}

  return (
    <div className='home'>
        <h1>Home</h1>
        <button onClick={logout} className='logout'> LogOut</button>
        <button onClick={deleteAccount} className='delete'>Delete Account</button>
    </div>
  )
}

export default Homes