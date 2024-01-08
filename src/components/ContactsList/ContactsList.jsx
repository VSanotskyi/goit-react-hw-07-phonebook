import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactsItem } from '../ContactsItem/ContactsItem';
import { fetchAllContactsThunk } from '../../store/contactsSlice/operations';
import {
  getContactsFilterSate,
  getContactsState,
} from '../../store/contactsSlice/selectors';
import { ContactsFormAdd } from '../ContactsFormAdd/ContactsFormAdd';
import { ContactsFormSearch } from '../ContactsFormSearch/ContactsFormSearch';

const filterContacts = (items, filter) => {
  return filter && items.length > 0
    ? items.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))
    : items;
};

const ContactsList = () => {
  const { items, isLoading, error } = useSelector(getContactsState);
  const filter = useSelector(getContactsFilterSate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContactsThunk());
  }, [dispatch]);

  const itemForRender = filterContacts(items, filter);

  return (
    <div>
      <ContactsFormAdd />
      <ContactsFormSearch />
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {
        itemForRender.length > 0 && !isLoading
          ? (<ul>
            {
              itemForRender.map(item => <ContactsItem key={item.id}
                                                      item={item}
              />)
            }
          </ul>)
          : <p>not defined</p>
      }
    </div>
  );
};

export { ContactsList };
