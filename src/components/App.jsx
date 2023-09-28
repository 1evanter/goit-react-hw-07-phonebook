import { ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from 'components/GlobalStyle';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ margin: '30px' }}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2 style={{ marginBottom: '10px' }}>Contacts</h2>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </div>
  );
};
