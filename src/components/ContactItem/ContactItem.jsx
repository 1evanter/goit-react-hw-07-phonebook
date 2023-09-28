import { Item } from './ContactItem.styled';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactItem = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return filteredContacts.map(({ name, phone, id }) => {
    return (
      <Item key={id}>
        {name}: {phone}
        <Button onClick={() => dispatch(deleteContact(id))} type="button">
          Delete
        </Button>
      </Item>
    );
  });
};
