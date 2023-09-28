import { Formik } from 'formik';
import { StyledForm, StyledField, Button, Label } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = newContact => {
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ id: nanoid(), ...newContact }));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <Label>
          {' '}
          Name
          <StyledField
            name="name"
            type="text"
            pattern="^[а-яА-ЯёЁa-zA-Z\s]+$"
            required
          />
        </Label>

        <Label>
          {' '}
          Number
          <StyledField
            name="number"
            type="tel"
            pattern="\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
