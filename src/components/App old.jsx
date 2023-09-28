import { Component } from "react"
import { ContactForm } from "./ContactForm/ContactForm";
import { GlobalStyle } from "components/GlobalStyle";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export class App extends Component {

  state = {
     contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  }
  
  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts)
      });
    }
}

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts === prevState.contacts) {
      return
    }

    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    console.log('Contacts changed')

  }

  addContact = newContact => {
    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact]
      }
    }
    )
  }

  changeFilter = e => {
 this.setState( {
        filter: e.currentTarget.value,
    }
    )
  }

   filteredList = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  
  handleDelete = contactId => {
    this.setState(prevState => {
      return {
     contacts: prevState.contacts.filter(contact => contact.id !== contactId)
   }
 })
}

  render() {
    return (
      <div style={{margin: "30px"}}>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />
        <h2 style={{marginBottom: "10px"}}>Contacts</h2>
        <Filter onChange={this.changeFilter} value={this.state.filter} />
        <ContactList contacts={this.filteredList()} onDelete={this.handleDelete} />
        <GlobalStyle/>
      </div>
  )
}

};
