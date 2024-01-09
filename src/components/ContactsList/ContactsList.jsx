import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactsItem } from '../ContactsItem/ContactsItem';
import { ContactsFormAdd } from '../ContactsFormAdd/ContactsFormAdd';
import { ContactsFormSearch } from '../ContactsFormSearch/ContactsFormSearch';
import { operations } from '../../store/contactsSlice';
import { selectors } from '../../store/contactsSlice';


const filterContacts = (items, filter) => {
  return filter && items.length > 0
    ? items.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))
    : items;
};

const ContactsList = () => {
  const { items, isLoading, error } = useSelector(selectors.selectorContacts);
  const filter = useSelector(selectors.selectorContactsFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchAllContactsThunk());
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
