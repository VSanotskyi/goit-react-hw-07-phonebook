import { createSlice } from '@reduxjs/toolkit';

import { operations } from './';

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
      .addCase(operations.fetchAllContactsThunk.pending, handlePending)
      .addCase(operations.fetchAddContactThunk.pending, handlePending)
      .addCase(operations.fetchDelContactThunk.pending, handlePending)
      // rejected
      .addCase(operations.fetchAllContactsThunk.rejected, handleRejected)
      .addCase(operations.fetchAddContactThunk.rejected, handleRejected)
      .addCase(operations.fetchDelContactThunk.rejected, handleRejected)
      // fulfilled
      // all
      .addCase(operations.fetchAllContactsThunk.fulfilled,
        (state, { payload }) => {
          state.contacts.isLoading = false;
          state.contacts.error = null;
          state.contacts.items = payload;
        })
      // add
      .addCase(operations.fetchAddContactThunk.fulfilled,
        (state, { payload }) => {
          state.contacts.isLoading = false;
          state.contacts.error = null;
          state.contacts.items.push(payload);
        })
      // del
      .addCase(operations.fetchDelContactThunk.fulfilled,
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
