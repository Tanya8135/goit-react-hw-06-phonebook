

import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { initialContacts } from "data/initContacts";
import storage from 'redux-persist/lib/storage';

const initialState = {
    list: initialContacts,
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action) => {
            const newContact = { ...action.payload, id: nanoid() };
            return { ...state, list: [...state.list, newContact] };
        },
        deleteContact: (state, action) => ({ ...state, list: state.list.filter(contact => contact.id !== action.payload) })
    }
});

const persistConfig = {
    key: 'contacts',
    storage,
};

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
export const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);