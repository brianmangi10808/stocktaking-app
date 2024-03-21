import { useEffect, useState } from "react"
import { useRef } from "react"
import  './Signcss.css'
import Homes from "./Homes"


function  Signup() {
  const name = useRef()
  const email = useRef()
  const password = useRef()
  const [showHome,setShowHome] = useState(false)
  const localSignUp =localStorage.getItem("signup")

  useEffect(() => {
    if(localSignUp){
      setShowHome(true)
    }

  })

  const handleClick = () =>{
    
    if(name.current.value&&email.current.value&&password.current.value){
      localStorage.setItem("name",name.current.value)
      localStorage.setItem("email",email.current.value)
      localStorage.setItem("password",password.current.value)
      localStorage.setItem("signup",email.current.value)
      alert(`Signed up successfully! Welcome ${name.current.value}`)
      window.location.reload();
    }
  }
 
  return (
    <>
     {showHome ? <Homes/>:
      <div className="container">
        <div className="form-box">
            <h1 className="title" >sign up</h1>
            <form action="push">
                <div className="input-group">
                    <div class="input-field" id="nameField">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="icon" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                          </svg>
                          <input type="text" ref={name} placeholder="Name" name="name"/>
                          {/* <input type="text" placeholder="Name"> */}
                    </div>
                    <div className="input-field">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="icon" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                          </svg>
                          <input type="email" ref={email} placeholder="Email Address" name="email"/>
                          {/* <input type="email" placeholder="Email"> */}
                    </div>
                    <div className="input-field">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="icon" fill="currentColor" className="bi bi-key-fill" viewBox="0 0 16 16">
                            <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                          </svg> 
                          <input type="password"  ref={password} placeholder="Password" />
                          {/* <input type="password" placeholder="Password"> */}
                    </div>
                    
                </div>
                <div className="btn-field">
                    <button type="button" className="signupBtn"  onClick={handleClick}   >sign up</button>
                    {/* <button type="button" className="loginBtn" >login</button> */}

                   

                </div>
            </form>
        </div>
    </div>
}
    </>
  )
}

export default Signup
