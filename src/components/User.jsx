
const User = ({ contact, handleEditButton, handleDeleteButton }) => {

    return (
        <tr key={contact.id}>
            <td>{contact.fullName}</td>
            <td>{contact.address}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.email}</td>
            <td>
                <button onClick={() => handleEditButton(contact.id)}>Edit</button>
                <button onClick={() => handleDeleteButton(contact.id)}>Delete</button>
            </td>
        </tr>
    )
}

export default User