import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AddClothForm = ({ closeForm, getAllClothes }) => {
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [type, setType] = useState('')
    const [size, setSize] = useState('')
    const [available, setAvailable] = useState('')
    const [price, setPrice] = useState('')
    const [imageValue, setImageValue] = useState(false)
    const navigate = useNavigate()

    const jsonData = JSON.stringify({
        image: image,
        brand: brand,
        type: type,
        size: size,
        available: available,
        price: price,
    })

    useEffect(() => {
        if (image === 'src/assets/No-image.jpg' && imageValue) {
            addClothItem(jsonData)
        }
    }, [imageValue])

    //A placholder image in case one is not provided by a user
    // function setDefaultImage() {
    //     setImage((image) => 'src/assets/No-image.jpg')
    // }

    //A function to add an item
    async function addClothItem(dataObj) {
        const res = await fetch(
            'https://inventory-data-6knk.onrender.com/clothes',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: dataObj,
            }
        )

        const data = await res.json()
        //For now, console log the returned item after it is added
        console.log(data)
        setImageValue(false)
        getAllClothes()
    }

    console.log('outside handleSubmit', image)

    const handleSubmit = (e) => {
        e.preventDefault()
        //If the value of image is an empty string, give it a default value
        if (image === '') {
            // setDefaultImage()
            setImage('src/assets/No-image.jpg')
            setImageValue(true)
        } else {
            addClothItem(jsonData)
        }

        console.log('in handleSubmit', image)

        // addClothItem(jsonData)
    }
    return (
        <div id='form-div'>
            <form
                onSubmit={handleSubmit}
                id='form'
            >
                <div className='form-title'>
                    <h2>Add Cloth Item</h2>
                    <i
                        className='bx bxs-x-circle bx-sm bx-cancel'
                        onClick={closeForm}
                    ></i>
                </div>
                <div>
                    <input
                        type='text'
                        value={image}
                        name='image'
                        placeholder='Image Link'
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        value={brand}
                        name='brand'
                        placeholder='Brand'
                        onChange={(e) => setBrand(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        value={type}
                        name='type'
                        placeholder='Type'
                        onChange={(e) => setType(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        value={size}
                        name='size'
                        placeholder='Size'
                        onChange={(e) => setSize(e.target.value)}
                    />{' '}
                </div>
                <div>
                    <input
                        type='text'
                        value={available}
                        name='available'
                        placeholder='Available'
                        onChange={(e) => setAvailable(e.target.value)}
                    />{' '}
                </div>
                <div>
                    <input
                        type='text'
                        value={price}
                        name='price'
                        placeholder='Price'
                        onChange={(e) => setPrice(e.target.value)}
                    />{' '}
                </div>
                <div>
                    <button
                        type='submit'
                        className='add-cloth-btn'
                        // onClick={closeForm}
                    >
                        Add Cloth
                    </button>{' '}
                </div>
            </form>
        </div>
    )
}

export default AddClothForm
