import { Link } from 'react-router-dom'
import Signup from './Signup'

function Home() {
    return (
        <div className='homepage-container'>
            <p>Welcome to the stocktaking app</p>
            <Signup/>
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
                Signup
            </Link>
        </div>
    )
}

export default Home
