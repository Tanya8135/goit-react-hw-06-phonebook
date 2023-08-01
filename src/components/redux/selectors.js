import { createSelector } from "reselect";

export const getContacts = state => state.contacts;

export const getStatusFilter = state => state.filter.status;

export const getFilteredContacts = createSelector(
    [getContacts, getStatusFilter],
    (contacts, filter) => {
        // return contacts.filter(contact =>
        //     contact.name.toLowerCase().includes(filter.toLowerCase())
        // );

        if (!contacts || !Array.isArray(contacts)) {
            return [];
        }

        return contacts.filter(contact =>
            contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
);
