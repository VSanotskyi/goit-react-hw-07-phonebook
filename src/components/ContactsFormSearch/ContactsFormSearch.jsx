import { useDispatch } from 'react-redux';

import { contactsSlice } from '../../store/contactsSlice';

const ContactsFormSearch = () => {
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => {
    dispatch(contactsSlice.setFilterAction(value));
  };

  return (
    <div>
      <input type="text"
             onChange={handleChange}
      />
    </div>
  );
};

export { ContactsFormSearch };
