import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='homepage-container'>
            <p>Welcome to the stocktaking app</p>
            <Link
                to={'/login'}
                className='link'
            >
                Log In
            </Link>
            <Link
                to={'/signup'}
                className='link'
            >
                Sign Up
            </Link>
        </div>
    )
}

export default Home
