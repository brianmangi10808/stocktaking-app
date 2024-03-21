
function AddItem({toggle}) {


    return (
      <div className='add-item' onClick={toggle}>
          <span className='add-div'>
            <i className='bx bx-plus bx-lg'></i>
            <p style={{margin: 0}}>Add</p>
          </span>
      </div>
    )
  }
  
  export default AddItem