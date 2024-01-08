import { useDispatch } from 'react-redux';
import { fetchDelContactThunk } from '../../store/contactsSlice/operations';

const ContactsItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchDelContactThunk(item.id));
  };

  return (
    <li>
      <p>{item.name}</p>
      <p>{item.number}</p>
      <button onClick={handleClick}>Del</button>
    </li>
  );
};

export { ContactsItem };
