import  { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {
    const {id} = useParams()
    const [data, setData] = useState([])
    const navigate = useNavigate()

    // const [image, setImage] = useState("")
    // const [brand, setBrand] = useState("")
    // const [type, setType] = useState("")
    // const [size, setSize] = useState("")
    // const [available, setAvailable] = useState("")
    // const [price, setPrice] = useState("")

    useEffect(()=>{
        fetch(`http://localhost:3000/clothes/${id}`)
        .then( res => res.json())
        .then( clothes => setData(clothes))
        .catch(err => console.log(err))
        
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        const jsonData = JSON.stringify({
            image: data.image,
            brand: data.brand,
            type: data.type,
            size: data.size,
            available: data.available,
            price: data.price
        })
        fetch(`http://localhost:3000/clothes/${id}`,{
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: jsonData,
            })
            .then(
                alert("Update done"), 
                navigate('/admin'),
                 
            )
        
        
        }
  return (
    <div className="edit-container">
        <form onSubmit={handleSubmit} id="edit-form">
            <div>
                <label htmlFor="image">Image Link</label>
                <input type="text" defaultValue={data.image} name="image" placeholder="Image Link" onChange={(e) => setData({...data, image: e.target.value})}/>
            </div>
          <div><label htmlFor="brand">Brand</label><input type="text" defaultValue={data.brand} name="brand" placeholder="Brand" onChange={(e) => setData({...data, brand: e.target.value})}/></div>
          <div><label htmlFor="type">Type</label><input type="text" defaultValue={data.type} name="type" placeholder="Type" onChange={(e) => setData({...data, type: e.target.value})}/></div>
          <div><label htmlFor="size">Size</label><input type="text" defaultValue={data.size} name="size" placeholder="Size" onChange={(e) => setData({...data, size: e.target.value})}/> </div>
          <div><label htmlFor="available">Available</label><input type="text" defaultValue={data.available} name="available" placeholder="Available" onChange={(e) => setData({...data, available: e.target.value})}/> </div>
          <div><label htmlFor="price">Price</label><input type="text" defaultValue={data.price} name="price" placeholder="Price" onChange={(e) => setData({...data, price: e.target.value})}/> </div>
          <div className='btn-div'><button type="submit" className='update'>Update</button> </div>
        </form>
    </div>
   
  )
}

export default Edit