import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';

import style from './ContactList.module.css';
import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const filterContacts = useSelector(getFilteredContacts);

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ul>
      {filterContacts.map(contact => (
        <li className={style.list} key={contact.id}>
          {contact.name} ({contact.number})
          <button
            className={style.btnDelete}
            type="button"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
