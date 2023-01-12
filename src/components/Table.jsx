import { useDispatch } from "react-redux"
import Users from "./Users"
import { UserContext } from './../context/UserContext';
import { useContext } from "react";
import { editUser } from "../redux/contactSlice";

const heading = ['Name', 'Address', 'PhoneNumber', 'Email', 'Actions']

const Table = () => {
    const { editFormData, setEditContactId } = useContext(UserContext)
    const dispatch = useDispatch()

    const handleSaveFormSubmit = (e) => {
        e.preventDefault()
        dispatch(editUser(editFormData))
        setEditContactId(null)
    }

    return (
        <form onSubmit={handleSaveFormSubmit}>
            <table>
                <thead>
                    <tr>
                        {
                            heading.map((head) => <th key={head}>{head}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    <Users />
                </tbody>
            </table>
        </form>
    )
}

export default Table