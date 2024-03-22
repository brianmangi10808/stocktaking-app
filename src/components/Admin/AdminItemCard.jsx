import { Link } from "react-router-dom";

function AdminItemCard({id,img,brand,type,size,available,price,deleteItem}) {
    return (
      <div className="card">
        <div className="img-div">
          <img
            src="https://images.pexels.com/photos/12511453/pexels-photo-12511453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
      </div>
        <div className="card-details">
          <p>Brand: {brand}</p>
          <p>Type: {type}</p>
          <p>Sizes: {size} </p>
          <p>Available: {available}</p>
          <p>Amount: {price}</p>
        </div>
        <div className="btn-div">
          <Link to={`/edit/${id}`}><button className="edit-btn">Edit</button></Link>
           
          <button onClick={deleteItem} className="delete-btn">Delete</button>
          
        </div>
      </div>
    );
  }
  
  export default AdminItemCard;
  