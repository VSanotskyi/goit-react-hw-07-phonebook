import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactsItem } from '../ContactsItem';
import { ContactsFormAdd } from '../ContactsFormAdd';
import { ContactsFormSearch } from '../ContactsFormSearch';

import { fetchAllContactsThunk } from '../../store/contactsSlice';
import {
  selectorContacts,
  selectorContactsFilter,
} from '../../store/contactsSlice';


const filterContacts = (items, filter) => {
  return filter && items.length > 0
    ? items.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))
    : items;
};

const ContactsList = () => {
  const { items, isLoading, error } = useSelector(selectorContacts);
  const filter = useSelector(selectorContactsFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContactsThunk());
  }, [dispatch]);

  const itemForRender = filterContacts(items, filter);

  return (
    <div>
      <ContactsFormAdd />
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {
        items.length > 0 ?
          <div>
            <ContactsFormSearch />
            {itemForRender.length > 0
              ? (
                <ul>
                  {
                    itemForRender.map(item => <ContactsItem key={item.id}
                                                            item={item}
                    />)
                  }
                </ul>
              )
              : <p>not defined</p>}
          </div> : !isLoading ? <p>no contacts</p> : <></>
      }
    </div>
  );
};

export { ContactsList };
