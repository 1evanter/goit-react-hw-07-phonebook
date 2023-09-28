import { Item } from './ContactItem.styled';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactItem = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

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
