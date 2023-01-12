import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../context/UserContext";
import { deleteUser } from "../redux/contactSlice";
import EditUser from "./EditUser";
import User from "./User";

const Users = () => {
    const { editContactId, setEditFormData, setEditContactId } = useContext(UserContext);
    const contacts = useSelector((store) => store.contacts);
    const dispatch = useDispatch()
    const handleEditButton = (contactId) => {
        const editedUser = contacts.find((contact) => contact.id === contactId)
        setEditContactId(editedUser.id)
        const userValues = {
            id: contactId,
            fullName: editedUser.fullName,
            address: editedUser.address,
            phoneNumber: editedUser.phoneNumber,
            email: editedUser.email
        }
        setEditFormData(userValues)
    }

    const handleDeleteButton = (id) => {
        dispatch(deleteUser({id}))
    }


    return contacts.map((contact) =>
        editContactId === contact.id ? (
            <EditUser
                key={contact.id}
            />
        ) : (
            <User
                key={contact.id}
                contact={contact}
                handleEditButton={handleEditButton}
                handleDeleteButton={handleDeleteButton}
            />
        )
    );
};

export default Users;
