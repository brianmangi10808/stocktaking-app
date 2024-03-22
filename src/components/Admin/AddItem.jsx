

function AddItem({toggle}) {


    return (
      <div className='add-item' onClick={toggle}>
          {/* <span className='add-div'>
            <i className='bx bx-plus bx-lg'></i>
            <p style={{margin: 0}}>Add</p>
          </span> */}

          <button className="btn-add">Add</button>
      </div>
    )
  }
  
  export default AddItem