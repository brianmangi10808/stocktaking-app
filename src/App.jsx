import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import NextPage from './pages/NextPage'
import ForgotPassword from './pages/ForgotPassword'
import Signup from './pages/Signup'
import Admin from './pages/Admin.jsx'
import Edit from './components/Admin/Edit.jsx'
import { useEffect, useState } from 'react'

function App() {
    const [products, setProducts] = useState([])

   

    const url = `http://localhost:3000/clothes`
    
  
    useEffect(() => {
     
      fetch(`http://localhost:3000/clothes`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
  
      })
    },[])
  
    //DELETE Method
    const deleteClothes = (id) => {
      fetch(url+`/${id}`,{
        method: "DELETE"
      })
      .then((res) => !res.ok ? console.log("Problem") : res.json() )
      window.location.reload()
  }
    return (
            <>
            <Header />
            <Router>
               
                    
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/login' element={<LoginPage />} />

                        <Route path='/NextPage' element={<NextPage />} />
                        <Route path='/ForgotPassword' element={<ForgotPassword />} />

                        <Route
                          path='/admin'
                          element={<Admin clothes={products} deleteCloth={deleteClothes}/>}
                      />
              <Route
                path='/edit/:id'
                element={<Edit/>}
                />
                    </Routes>
                
            </Router>
            </>
    )
}

export default App
