import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute.jsx'
import Header from './components/Header'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import ForgotPassword from './pages/ForgotPassword'
import Signup from './pages/Signup'
import Admin from './pages/Admin.jsx'
import Edit from './components/Admin/Edit.jsx'
import { useEffect, useState } from 'react'

function App() {
    const [products, setProducts] = useState([])
    const [user, setUser] = useState({})

    const url = `http://localhost:3000/clothes`

    useEffect(() => {
        fetch(`http://localhost:3000/clothes`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
            })
    }, [])

    //DELETE Method
    const deleteClothes = (id) => {
        fetch(url + `/${id}`, {
            method: 'DELETE',
        }).then((res) => (!res.ok ? console.log('Problem') : res.json()))
        window.location.reload()
    }

    return (
        <>
            <Router>
                <Header />

                <Routes>
                    <Route
                        path='/'
                        element={<Home />}
                    />
                    <Route
                        path='/signup'
                        element={<Signup />}
                    />
                    <Route
                        path='/login'
                        element={
                            <LoginPage
                                user={user}
                                setUser={setUser}
                            />
                        }
                    />
                    <Route
                        path='/ForgotPassword'
                        element={<ForgotPassword />}
                    />

                    <Route
                        path='/admin'
                        element={
                            <PrivateRoute
                                isLoggedIn={localStorage.getItem('isloggedin')}
                            />
                        }
                    >
                        <Route
                            path='/admin'
                            element={
                                <Admin
                                    clothes={products}
                                    deleteCloth={deleteClothes}
                                />
                            }
                        />
                    </Route>
                    <Route
                        path='/edit'
                        element={
                            <PrivateRoute
                                isLoggedIn={localStorage.getItem('isloggedin')}
                            />
                        }
                    >
                        <Route
                            path='/edit/:id'
                            element={<Edit />}
                        />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default App
