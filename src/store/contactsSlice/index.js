export {
  contactsReducer, setFilterAction,
} from 'store/contactsSlice/contactsSlice';
export {
  selectorContacts,
  selectorContactsFilter,
} from 'store/contactsSlice/selectors';
export {
  fetchAllContactsThunk,
  fetchAddContactThunk,
  fetchDelContactThunk,
} from 'store/contactsSlice/operations';

