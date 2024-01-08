import { useDispatch } from 'react-redux';
import { setFilterAction } from '../../store/contactsSlice/contactsSlice';

const ContactsFormSearch = () => {
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => {
    dispatch(setFilterAction(value));
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
