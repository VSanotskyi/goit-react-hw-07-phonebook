import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  axiosAllContacts,
  axiosAddContact,
  axiosDelContact,
} from 'services/contacts';

export const fetchAllContactsThunk = createAsyncThunk('contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosAllContacts();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  });

export const fetchAddContactThunk = createAsyncThunk('contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const { data } = await axiosAddContact(newContact);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  });

export const fetchDelContactThunk = createAsyncThunk('contacts/delContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axiosDelContact(contactId);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  });
