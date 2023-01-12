import { useContext } from 'react'
import { UserContext } from './../context/UserContext';

const EditUser = () => {
    const { editFormData, handleEditInputChange, handleCancelButton } = useContext(UserContext)

    return (
        <tr>
            <td>
                <input
                    required
                    type="text"
                    name='fullName'
                    placeholder='Enter a name...'
                    value={editFormData.fullName}
                    onChange={handleEditInputChange}
                />
            </td>
            <td>
                <input
                    required
                    type="text"
                    name='address'
                    placeholder='Enter an address...'
                    value={editFormData.address}
                    onChange={handleEditInputChange}
                />
            </td>
            <td>
                <input
                    required
                    type="text"
                    name='phoneNumber'
                    placeholder='Enter a phoneNumber...'
                    value={editFormData.phoneNumber}
                    onChange={handleEditInputChange}
                />
            </td>
            <td>
                <input
                    required
                    type="email"
                    name='email'
                    placeholder='Enter an email...'
                    value={editFormData.email}
                    onChange={handleEditInputChange}
                />
            </td>
            <td>
                <button type='submit'>Save</button>
                <button onClick={handleCancelButton}>Cancel</button>
            </td>
        </tr>
    )
}

export default EditUser