// import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
// import storage from 'redux-persist/lib/storage';

// const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState: [],
//     reducers: {
//         // addContact: (state, action) => {
//         //     return [...state, action.payload];
//         // },
//         addContact: {
//             reducer(state, action) {
//                 state.push(action.payload)
//             },
//             prepare(name, number) {
//                 return {
//                     payload: {
//                         id: nanoid(),
//                         name,
//                         number,
//                     }
//                 }
//             }
//         },
//         deleteContact(state, action) {
//             const index = state.findIndex(contact => contact.id === action.payload);
//             state.splice(index, 1);
//         }
//     }
// });

// const persistConfig = {
//     key: 'contacts',
//     storage,
// };

// export const contactsReducer = contactsSlice.reducer;
// export const { addContact, deleteContact } = contactsSlice.actions;
// export const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);


// import { createSlice } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
// import storage from 'redux-persist/lib/storage';

// const contactsSlice = createSlice({
//     name: 'contacts',
//     // initialState: {
//     //     contacts: [],
//     // },
//     initialState: [],
//     reducers: {
//         addContact: (state, action) => {
//             return { ...state, contacts: [...state.contacts, action.payload] };
//         },
//         deleteContact: (state, action) => {
//             state.contacts = state.contacts.filter(
//                 (contact) => contact.id !== action.payload
//             );
//         },
//     }
// });

// const persistConfig = {
//     key: 'contacts',
//     storage,
// };

// export const contactsReducer = contactsSlice.reducer;
// export const { addContact, deleteContact } = contactsSlice.actions;
// export const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);


import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { initialContacts } from "data/initContacts";
import storage from 'redux-persist/lib/storage';

const initialState = {
    // contacts: initialContacts,
    list: initialContacts,
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action) => {
            return { ...state, list: [...state.list, action.payload] };
        },
        deleteContact: (state, action) => ({ ...state, list: state.list.filter(contact => contact.id !== action.payload) })

        //     return { ...state, contacts: [...state.contacts, action.payload] };
        // },
        // deleteContact: (state, action) => {
        //     state.contacts = state.contacts.filter(
        //         (contact) => contact.id !== action.payload
        //     );
        //     return { ...state, list: [...state.list, action.payload] };
        // },
        // deleteContact: (state, action) => ({ ...state, list: state.list.filter(contact => contact.id !== action.payload) })
    }
});

const persistConfig = {
    key: 'contacts',
    storage,
};

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
export const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);