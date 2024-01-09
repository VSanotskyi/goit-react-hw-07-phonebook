import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactsItem } from 'components/ContactsItem';
import { ContactsFormAdd } from 'components/ContactsFormAdd';
import { ContactsFormSearch } from 'components/ContactsFormSearch';

import {
  fetchAllContactsThunk,
  selectVisibleContacts,
  selectorContacts,
  selectorContactsFilter,
} from 'store/contactsSlice';

const ContactsList = () => {
  const items = useSelector(selectVisibleContacts);
  const { isLoading, error } = useSelector(selectorContacts);
  const filter = useSelector(selectorContactsFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContactsThunk());
  }, [dispatch]);

  return (
    <div>
      <ContactsFormAdd />
      <hr />
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {!isLoading && render(items, filter)}
    </div>
  );
};

export { ContactsList };

function render(array, filter) {
  const contactsTitle = <h2>Contacts</h2>;
  const findContactsTitle = <h3>Find contact</h3>;
  const notDefined = <p>Not defined</p>;
  const noContacts = <p>No contacts</p>;
  
  if (array.length > 0) {
    return <>
      {contactsTitle}
      {findContactsTitle}
      <ContactsFormSearch />
      <ul>
        {
          array.map(item => <ContactsItem key={item.id}
                                          item={item}
          />)
        }
      </ul>
    </>;
  } else if (array.length === 0 && filter) {
    return <>
      {contactsTitle}
      {findContactsTitle}
      <ContactsFormSearch />
      {notDefined}
    </>;
  } else {
    return noContacts;

  }
}

