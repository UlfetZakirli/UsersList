import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/contactSlice'

const AddUser = () => {
    const dispatch = useDispatch()
    const [addFormData, setAddFormData] = useState({
        fullName: '',
        address: '',
        phoneNumber: '',
        email: ''
    })


    const handleAddInputChange = (e) => {
        const fieldName = e.target.getAttribute('name')
        const fieldValue = e.target.value
        const newContact = { ...addFormData }
        newContact[fieldName] = fieldValue
        setAddFormData(newContact)
    }

    const handleAddFormSubmit = (e) => {
        e.preventDefault()
        dispatch(addUser(addFormData))
    }

    return (
        <div>
            <h2>Add a User</h2>
            <form onSubmit={handleAddFormSubmit}>
                <input
                    required
                    type="text"
                    name='fullName'
                    placeholder='Enter a name...'
                    onChange={handleAddInputChange}
                />
                <input
                    required
                    type="text"
                    name='address'
                    placeholder='Enter an address...'
                    onChange={handleAddInputChange}
                />
                <input
                    required
                    type="text"
                    name='phoneNumber'
                    placeholder='Enter a phoneNumber...'
                    onChange={handleAddInputChange}
                />
                <input
                    required
                    type="email"
                    name='email'
                    placeholder='Enter an email...'
                    onChange={handleAddInputChange}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddUser