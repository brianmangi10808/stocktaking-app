import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import { useState, useEffect } from 'react'
import Admin from './pages/Admin.jsx'
import './css/admin.css'

function App() {

    const [products, setProducts] = useState([])

  const url = `http://localhost:3000/clothes`
  

  useEffect(() => {
    fetch(`http://localhost:3000/clothes`)
    .then((res) => res.json())
    .then((data) => {
      setProducts(data)
    })
  })

  //DELETE Method
  const deleteClothes = (id) => {
    fetch(url+`/${id}`,{
      method: "DELETE"
    })
    .then((res) => !res.ok ? console.log("Problem") : res.json() )
}

//POST method
const addClothes = () => {
  fetch(url,{
    method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  body: JSON.stringify({
    image: "https://example.com/image7.jpg",
    brand: "Puma",
    type: "Shorts",
    size: [
      "S",
      "M",
      "L"
    ],
    available: 15,
    price: 35.99
  })
  })
  .then(res => {
    if (!res.ok) {
      throw Error(res.status);
     }
     return res.json();
    })
    .then(data => {
    console.log(data);
    
    }).catch(e => {
    console.log(e);
    });
}
    return (
        <>
            <Router>
                <div className='container'>
                    <Header />
                    <Routes>
                        <Route
                            path='/'
                            element={<Home />}
                        />
                        <Route
                            path='/admin'
                            element={<Admin clothes={products} deleteCloth={deleteClothes}/>}
                        />
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default App
