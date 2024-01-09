import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAllContactsThunk
  , fetchAddContactThunk,
  fetchDelContactThunk,
} from './';

const handlePending = (state) => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
};

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    setFilterAction: (state, { payload }) => {
      state.filter = payload;
    },
  },

  extraReducers: builder => {
    builder
      // pending
      .addCase(fetchAllContactsThunk.pending, handlePending)
      .addCase(fetchAddContactThunk.pending, handlePending)
      .addCase(fetchDelContactThunk.pending, handlePending)
      // rejected
      .addCase(fetchAllContactsThunk.rejected, handleRejected)
      .addCase(fetchAddContactThunk.rejected, handleRejected)
      .addCase(fetchDelContactThunk.rejected, handleRejected)
      // fulfilled
      // all
      .addCase(fetchAllContactsThunk.fulfilled,
        (state, { payload }) => {
          state.contacts.isLoading = false;
          state.contacts.error = null;
          state.contacts.items = payload;
        })
      // add
      .addCase(fetchAddContactThunk.fulfilled,
        (state, { payload }) => {
          state.contacts.isLoading = false;
          state.contacts.error = null;
          state.contacts.items.push(payload);
        })
      // del
      .addCase(fetchDelContactThunk.fulfilled,
        (state, { payload }) => {
          state.contacts.isLoading = false;
          state.contacts.error = null;

          const i = state.contacts.items.findIndex(i => i.id === payload.id);
          state.contacts.items.splice(i, 1);
        });
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { setFilterAction } = contactsSlice.actions;
