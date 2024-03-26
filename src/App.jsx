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

    useEffect(() => {
        getAllClothes()
    }, [])

    //Get all clothes
    async function getAllClothes() {
        const res = await fetch(
            'https://inventory-data-6knk.onrender.com/clothes'
        )
        const data = await res.json()
        setProducts(data)
    }

    //Delete a clothes item
    async function deleteClothItem(id) {
        const res = await fetch(
            `https://inventory-data-6knk.onrender.com/clothes/${id}`,
            {
                method: 'DELETE',
            }
        )
        const data = await res.json()
        console.log('Item deleted successfully', data)

        //Get the clothes from the db again to cause a state change and a component rerender
        //This way the changes are visible without refreshing the page
        getAllClothes()
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
                                    getAllClothes={getAllClothes}
                                    deleteClothItem={deleteClothItem}
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
                            element={<Edit getAllClothes={getAllClothes} />}
                        />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default App
