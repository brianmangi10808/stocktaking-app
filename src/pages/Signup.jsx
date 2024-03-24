import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import './sign.css'

function Signup() {
    const name = useRef()
    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()

    async function createNewUser(userObj) {
        await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObj),
        })

        localStorage.clear()
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

            localStorage.setItem('name', name.current.value)
            localStorage.setItem('email', email.current.value)
            localStorage.setItem('password', password.current.value)
            localStorage.setItem('signup', email.current.value)

            const newUser = {
                ...userObj,
                isAdmin: false,
                isLoggedIn: false,
            }

            createNewUser(newUser)
            navigate('/login')
        }
    }

    return (
        <>
            <div className='user-container'>
                <div className='form-box'>
                    <h1 className='title'>sign up</h1>
                    <form action='push'>
                        <div className='input-group'>
                            <div
                                className='input-field'
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
        </>
    )
}

export default Signup
