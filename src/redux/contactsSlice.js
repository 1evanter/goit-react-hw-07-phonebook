import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    },
    reducers: {
        addContact(state, action) {
        state.push(action.payload)
        },
        deleteContact(state, action) {
          return(state = state.filter(contact => contact.id !== action.payload)) 
        }
    }
})

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;