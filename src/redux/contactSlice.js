import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";
import { v4 as uuid } from "uuid";

const initialState = data;
const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { fullName, address, phoneNumber, email } = action.payload;
            const newUser = {
                id: uuid(),
                fullName,
                address,
                phoneNumber,
                email,
            };
            state.push(newUser);
        },
        editUser: (state, action) => {
            const { id, fullName, address, phoneNumber, email } = action.payload;
            const index = state.findIndex((contact) => contact.id === id);
            console.log(initialState);
            const editedUser = {
                id,
                fullName,
                address,
                phoneNumber,
                email,
            };
            state[index] = editedUser;
        },
        deleteUser: (state, action) => {
            //   return state.filter((contact) => contact.id !== action.payload.id);
            // OR
            const index = state.findIndex(
                (contact) => contact.id === action.payload.id
            );
            state.splice(index, 1);
            return state;
        },
    },
});

export const { addUser, editUser, deleteUser } = contactSlice.actions;
export default contactSlice.reducer;
