import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
