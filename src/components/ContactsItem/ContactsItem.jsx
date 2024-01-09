import { useDispatch } from 'react-redux';

import { operations } from '../../store/contactsSlice';

const ContactsItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(operations.fetchDelContactThunk(item.id));
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
