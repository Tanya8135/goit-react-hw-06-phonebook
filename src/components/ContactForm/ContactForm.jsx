import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

import style from './ContactForm.module.css';
import { getFilteredContacts } from 'redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const dublicateContact = filteredContacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (dublicateContact) {
      alert(`${name} is already in contacts!`);
    } else {
      dispatch(addContact({ name, number }));
    }

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label className={style.subTitle}>
        Name
        <input
          className={style.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. 
          For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter name"
          required
        />
      </label>

      <label className={style.subTitle}>
        Number
        <input
          className={style.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter your number"
          required
        />
      </label>

      <button type="submit" className={style.btn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
