import React, { useState, useEffect } from 'react'

console.log(import.meta.env.VITE_API_BASE_URL)
import axios from 'axios'
const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/users'

export default function UsersCRUD() {

    const [users, setUsers] = useState([])
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [updateName, setUpdateName] = useState("");
    const [updateAge, setUpdateAge] = useState("");
    const [updateId, setUpdateId] = useState('')
    const [deleteId, setDeleteId] = useState('')


    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        try {
            const response = await axios.get(`${API_URL}/users`)
            setUsers(response.data)
        } catch (error) {
            console.error("Error fetching users:", error)
        }
    }

    const createUser = async () => {
        try {
            const newUser = { name: name, age: age }
            console.log(newUser)
            await axios.post(`${API_URL}/users`, newUser)
            setName('')
            setAge('')
            fetchUsers()
        } catch (error) {
            console.error("Error creating user:", error)
        }
    }

    const updateUser = async () => {
        try {
            const updatedUser = { name: updateName, age: updateAge }
            await axios.put(`${API_URL}/users/${updateId}`, updatedUser)
            setUpdateName('') 
            setUpdateAge('') 
            setUpdateId('')
            fetchUsers()
        } catch (error) {
            console.error("Error updating user:", error)
        }
    }

    const deleteUser = async () => {
        try {
            await axios.delete(`${API_URL}/users/${deleteId}`)
            setDeleteId('')
            fetchUsers()
        } catch (error) {
            console.error("Error deleting user:", error)
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
