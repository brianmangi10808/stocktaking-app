import { useEffect, useState } from 'react'
import { useRef } from 'react'
import Home from './Home'
import './sign.css';

function Signup() {
    const name = useRef()
    const email = useRef()
    const password = useRef()
    const [showHome, setShowHome] = useState(false)
    const localSignUp = localStorage.getItem('signup')

    useEffect(() => {
        if (localSignUp) {
            setShowHome(true)
            // console.log(localSignUp)
        }
    })

    async function createNewUser(userObj) {
        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObj),
        })

        const data = await response.json()
        console.log('data from users endpoint', data)
    }

    const handleClick = () => {
        const userObj = {}
        if (
            name.current.value &&
            email.current.value &&
            password.current.value
        ) {
            userObj.name = name.current.value
            userObj.email = email.current.value
            userObj.password = password.current.value

            // console.log('userObj', userObj)

            localStorage.setItem('name', name.current.value)
            localStorage.setItem('email', email.current.value)
            localStorage.setItem('password', password.current.value)
            localStorage.setItem('signup', email.current.value)
            alert(`Signed up successfully! Welcome ${name.current.value}`)
            // window.location.reload()

            const newUser = {
                ...userObj,
                isAdmin: false,
                isLoggedIn: false,
            }

            // console.log('newUser', newUser)
            createNewUser(newUser)
        }
    }

    return (
        <>
            {showHome ? (
                <Home />
            ) : (
                <div className='container'>
                    <div className='form-box'>
                        <h1 className='title'>sign up</h1>
                        <form action='push'>
                            <div className='input-group'>
                                <div
                                    class='input-field'
                                    id='nameField'
                                >
                                    
                                    <input
                                        type='text'
                                        ref={name}
                                        placeholder='Name'
                                        name='name'
                                    />
                                    {/* <input type="text" placeholder="Name"> */}
                                </div>
                                <div className='input-field'>
                                    
                                    <input
                                        type='email'
                                        ref={email}
                                        placeholder='Email Address'
                                        name='email'
                                    />
                                    {/* <input type="email" placeholder="Email"> */}
                                </div>
                                <div className='input-field'>
                                   
                                    <input
                                        type='password'
                                        ref={password}
                                        placeholder='Password'
                                    />
                                    {/* <input type="password" placeholder="Password"> */}
                                </div>
                            </div>
                            <div className='btn-field'>
                                <button
                                    type='button'
                                    className='signupBtn'
                                    onClick={handleClick}
                                >
                                    sign up
                                </button>
                                {/* <button type="button" className="loginBtn" >login</button> */}
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default Signup
