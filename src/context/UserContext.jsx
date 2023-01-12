
import { createContext, useState } from 'react';

export const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [editContactId, setEditContactId] = useState(null)
    const [editFormData, setEditFormData] = useState({
        fullName: '',
        address: '',
        phoneNumber: '',
        email: ''
    })

    const handleEditInputChange = (e) => {
        const fieldName = e.target.getAttribute('name')
        const fieldValue = e.target.value
        const newContact = { ...editFormData }
        newContact[fieldName] = fieldValue
        setEditFormData(newContact)
    }

    const handleCancelButton = () => {
        setEditContactId(null)
    }

    const providerValue = {
        editContactId,
        editFormData,
        setEditFormData,
        setEditContactId,
        handleEditInputChange,
        handleCancelButton
    }

    return (
        <UserContext.Provider value={providerValue}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider