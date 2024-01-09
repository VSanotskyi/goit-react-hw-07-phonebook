import { createSelector } from '@reduxjs/toolkit';

export const selectorContacts = state => state.contacts.contacts;
export const selectorContactsFilter = state => state.contacts.filter;
export const selectVisibleContacts = createSelector(
  state => state.contacts.contacts.items,
  state => state.contacts.filter,
  (items, filter) => {
    return items.filter(contact => contact.name.toLowerCase()
      .includes(filter.toLowerCase()));
  },
);
