import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edit({ getAllClothes }) {
    const { id } = useParams()
    const [data, setData] = useState([])
    const navigate = useNavigate()

    const jsonData = JSON.stringify({
        image: data.image,
        brand: data.brand,
        type: data.type,
        size: data.size,
        available: data.available,
        price: data.price,
    })

    useEffect(() => {
        fetch(`https://inventory-data-6knk.onrender.com/clothes/${id}`)
            .then((res) => res.json())
            .then((clothes) => setData(clothes))
            .catch((err) => console.log(err))
    }, [id])

    //Edit a clothing item
    async function editItem(itemObj, id) {
        console.log('item object after form edit', itemObj)
        console.log('id', id)
        const res = await fetch(
            `https://inventory-data-6knk.onrender.com/clothes/${id}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: itemObj,
            }
        )

        const data = await res.json()
        console.log(data)

        getAllClothes()
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // fetch(`https://inventory-data-6knk.onrender.com/${id}`,{
        //     method: "PATCH",
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: jsonData,
        // }).then(alert('Update done'), navigate('/admin'))
        // window.location.reload()

        editItem(jsonData, id)
        navigate('/admin')
    }
    return (
        <div className='edit-container'>
            <form
                onSubmit={handleSubmit}
                id='edit-form'
            >
                <div>
                    <label htmlFor='image'>Image Link</label>
                    <input
                        type='text'
                        defaultValue={data.image}
                        name='image'
                        placeholder='Image Link'
                        onChange={(e) =>
                            setData({ ...data, image: e.target.value })
                        }
                    />
                </div>
                <div>
                    <label htmlFor='brand'>Brand</label>
                    <input
                        type='text'
                        defaultValue={data.brand}
                        name='brand'
                        placeholder='Brand'
                        onChange={(e) =>
                            setData({ ...data, brand: e.target.value })
                        }
                    />
                </div>
                <div>
                    <label htmlFor='type'>Type</label>
                    <input
                        type='text'
                        defaultValue={data.type}
                        name='type'
                        placeholder='Type'
                        onChange={(e) =>
                            setData({ ...data, type: e.target.value })
                        }
                    />
                </div>
                <div>
                    <label htmlFor='size'>Size</label>
                    <input
                        type='text'
                        defaultValue={data.size}
                        name='size'
                        placeholder='Size'
                        onChange={(e) =>
                            setData({ ...data, size: e.target.value })
                        }
                    />{' '}
                </div>
                <div>
                    <label htmlFor='available'>Available</label>
                    <input
                        type='text'
                        defaultValue={data.available}
                        name='available'
                        placeholder='Available'
                        onChange={(e) =>
                            setData({ ...data, available: e.target.value })
                        }
                    />{' '}
                </div>
                <div>
                    <label htmlFor='price'>Price</label>
                    <input
                        type='text'
                        defaultValue={data.price}
                        name='price'
                        placeholder='Price'
                        onChange={(e) =>
                            setData({ ...data, price: e.target.value })
                        }
                    />{' '}
                </div>
                <div className='btn-div'>
                    <button
                        type='submit'
                        className='update'
                    >
                        Update
                    </button>{' '}
                </div>
            </form>
        </div>
    )
}

export default Edit
