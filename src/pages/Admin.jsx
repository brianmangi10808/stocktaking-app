
import { useState } from 'react'
import AddClothForm from '../components/Admin/AddClothForm'
import AddItem from '../components/Admin/AddItem'
import '../css/admin.css'
import AdminItemCard from '../components/Admin/AdminItemCard'



function Admin({clothes, deleteCloth}) {

    const [openModal, setopenModal] = useState(false)

   
    const clothItems = clothes.map((item) => 
       
   
        (
        <div className='item-div' key={item.id}>
            <AdminItemCard 
            img={item.image}
            brand={item.brand}
            type={item.type}
            size={item.size}
            available={item.available}
            price={item.price}
            deleteItem={() => {deleteCloth(item.id) }}
            
            />
        </div>
    )
    )

    const openForm = () =>{
        return setopenModal(true)
    }

    const closeForm = () =>{
        return setopenModal(false)
    }

  

  return (
    <>
        <div className='container'>
            {openModal && <AddClothForm close={closeForm} />}
           
            <AddItem toggle={openForm}/>
            <div className='stock_items'>
                
                {clothItems}
            </div>
        </div>
    </>
  )
}

export default Admin