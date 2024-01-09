import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from 'store/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
