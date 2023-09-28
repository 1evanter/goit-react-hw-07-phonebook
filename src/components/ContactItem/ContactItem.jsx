import { nanoid } from 'nanoid';
import { Item } from './ContactItem.styled';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = () => {

   const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);
    
     const filteredList = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
    
    return (
        
        filteredList().map(({name, number, id}) => {
            return (
                <Item key={nanoid()}>{name}: {number}
                    <Button onClick={() => dispatch(deleteContact(id))} type="button">Delete</Button>
                </Item>
            )
        })
       
    )
}