import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import NextPage from './pages/NextPage'
import ForgotPassword from './pages/ForgotPassword'
import Signup from './pages/Signup'

function App() {
    return (
            <Router>
                <div className='container'>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/login' element={<LoginPage />} />

                        <Route path='/NextPage' element={<NextPage />} />
                        <Route path='/ForgotPassword' element={<ForgotPassword />} />
                    </Routes>
                </div>
            </Router>
    )
}

export default App
