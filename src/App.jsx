import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Signup from './pages/Signup'

function App() {
    return (
        <>
            <Router>
                <div className='container'>
                    <Header />
                    <Signup/>
                    <Routes>
                        <Route
                            path='/'
                            element={<Home />}
                        />
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default App
