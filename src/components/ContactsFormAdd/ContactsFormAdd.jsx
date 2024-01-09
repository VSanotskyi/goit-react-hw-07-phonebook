import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAddContactThunk } from '../../store/contactsSlice';
import { selectorContacts } from '../../store/contactsSlice';

const checkContact = (contacts, contact) => {
  return contacts.find(
    el => el.name.toLowerCase() === contact.name.toLowerCase());
};

const initState = {
  name: '',
  number: '',
};

const ContactsFormAdd = () => {
  const [contact, setContact] = useState(initState);
  const { items } = useSelector(selectorContacts);
  const dispatch = useDispatch();

  const handleChange = ({ target: { value, name } }) => {
    setContact(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkContact(items, contact)) {
      alert('error');
      setContact(initState);
      return;
    }

    dispatch(fetchAddContactThunk(contact));
    setContact(initState);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        <p>Name</p>
        <input type="text"
               name="name"
               value={contact.name}
               onChange={handleChange}
               required
        />
      </label>
      <label>
        <p>Number</p>
        <input type="tel"
               name="number"
               value={contact.number}
               onChange={handleChange}
               required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export { ContactsFormAdd };
