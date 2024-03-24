import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [newUser, setnewUser] = useState({})
    let tempUser = {}

    async function getUserObj(email, password) {
        // console.log('email value in context', email)
        //Make a get request to fetch the user object that matches the email in the form
        const response = await fetch(
            `http://localhost:3000/users?email=${email}`
        )

        const data = await response.json()
        const userObj = { ...data[0] }

        if (userObj.password === password) {
            // setUser({
            // 	...userObj,
            // 	isLoggedIn: true,
            // })
            // newUser = {
            //     ...userObj,
            //     isLoggedIn: true,
            // }
            console.log('user obj copy of db data', userObj)

            tempUser = {
                ...userObj,
                isLoggedIn: true,
            }

            console.log('temp user', tempUser)
            setnewUser((newUser) => tempUser)
            // console.log('user obj in context', newUser)
        }
        // } else {
        // 	// alert("Log in credentials don't match.")
        // 	setIsError(true)
        // 	setErrorMessage('Invalid login.')
        // }
    }

    const login = () => {
        setIsLoggedIn(true)
    }

    const logout = () => {
        setIsLoggedIn(false)
    }

    return (
        <AuthContext.Provider
            value={{ isLoggedIn, newUser, login, logout, getUserObj }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
