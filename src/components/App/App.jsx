import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

import style from './App.module.css';

const App = () => {
  return (
    <div className={style['phone-book']}>
      <h1 className={style.name}>Phonebook</h1>
      <ContactForm />

      <h2 className={style.name}>Contacts</h2>
      <Filter />

      <ContactList />
    </div>
  );
};

export default App;
