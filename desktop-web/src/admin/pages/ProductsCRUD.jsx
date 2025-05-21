import React, { useState, useEffect } from 'react'
import products from '../../staticData/products'

console.log(import.meta.env.VITE_API_BASE_URL)
import axios from 'axios'
const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/users'

export default function ProductsCRUD() {

    // const [users, setUsers] = useState([])
    // const [name, setName] = useState("")
    // const [age, setAge] = useState("")
    // const [updateName, setUpdateName] = useState("");
    // const [updateAge, setUpdateAge] = useState("");
    // const [updateId, setUpdateId] = useState('')
    // const [deleteId, setDeleteId] = useState('')



    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [updateName, setUpdateName] = useState("");
    const [updateAge, setUpdateAge] = useState("");
    const [updateId, setUpdateId] = useState('')
    const [deleteId, setDeleteId] = useState('')
    const [imageURLs, setImageURLs] = useState([]);
    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [selectedProduct, setSelectedProduct] = useState(null);






    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${API_URL}/products`)
            setProducts(response.data)
        } catch (error) {
            console.error("Error fetching products:", error)
        }
    }

    const createProduct = async () => {
    try {
        const newProduct = {
            name: name,
            description: description,
            imageURL: imageURLs,
            brand: brand,
            price: price,
            categories: categories,
        }
        console.log(newProduct)
        await axios.post(`${API_URL}/products`, newProduct)
        setName('')
        setDescription('')
        setImageURLs([])
        setBrand('')
        setPrice('')
        setCategories([])
        fetchProducts()
    } catch (error) {
        console.error("Error creating product:", error)
    }
    }

    const updateProduct = async () => {
    try {
        const updatedProduct = {
            name: name,
            description: description,
            imageURL: imageURLs,
            brand: brand,
            price: price,
            categories: categories,
        }
        console.log(updatedProduct)
        await axios.put(`${API_URL}/products/${selectedProduct._id}`, updatedProduct)
        setName('')
        setDescription('')
        setImageURLs([])
        setBrand('')
        setPrice('')
        setCategories([])
        fetchProducts()
    } catch (error) {
        console.error("Error updating product:", error)
    }
}

// Delete Product
const deleteProduct = async () => {
    try {
        await axios.delete(`${API_URL}/products/${selectedProduct._id}`)
        fetchProducts()
    } catch (error) {
        console.error("Error deleting product:", error)
    }
}
    

  return (
    <div className='main-container'>

       

      <h1 className="fs-4 my-4 text-center">Users CRUD</h1>

        <div className='d-flex flex-column gap-4'>

            <div className='d-flex flex-column mx-auto bg-black p-3 gap-2'>
                {users.map(user => (
                    <h6 className='text-white' key={user._id}>
                       {user._id} ➜➜   {user.name} - {user.age} 
                    </h6>
                ))}
            </div>

            <div className='card gap-3 col-11 col-lg-4 mx-auto bg-light p-3'>
                <h4>Create New User</h4>      
                <input name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input name="age" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)}/>
                <button className='btn btn-success' onClick={createUser}>Create User</button>
            </div>
   
            <div className='card gap-3 col-11 col-lg-4 mx-auto bg-light p-3'>
                <h4>Update User</h4>
                <input placeholder="User ID" value={updateId} onChange={(e) => setUpdateId(e.target.value)} />
                <input name="name" placeholder="New Name" value={updateName} onChange={(e) => setUpdateName(e.target.value)} />
                <input name="age" placeholder="New Age" value={updateAge} onChange={(e) => setUpdateAge(e.target.value)}/>
                <button className='btn btn-dark' onClick={updateUser}>Update User</button>
            </div>

            <div className='card gap-3 col-11 col-lg-4 mx-auto bg-light p-3'>
                <h4>Delete User</h4>
                <input placeholder="User ID" value={deleteId} onChange={(e) => setDeleteId(e.target.value)} />
                <button className='btn btn-danger' onClick={deleteUser}>Delete User</button>
            </div>

        </div>
    </div>
  )
}
