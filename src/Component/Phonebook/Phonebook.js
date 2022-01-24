import React, { Component } from 'react';
import { Notyf } from 'notyf';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import styles from './Phonebook.module.css';
//import 'notyf-js/dist/notyf.min.css';

const notyf = new Notyf();

const filterContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase()),
  );
};

export default class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    console.log('componentDidMount');
    try {
      const localContacts = JSON.parse(localStorage.getItem('contacts'));
      console.log('localContacts:', localContacts);
      if (localContacts) {
        this.setState({ contacts: localContacts });
      }
    } catch (error) {
      console.log('error: ', error);
    }
  }

  componentDidUpdate(prevState) {
    console.log('componentDidUpdate');
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContactIntoState = newContact => {
    const { contacts } = this.state;
    if (filterContacts(contacts, newContact.name).length) {
      notyf.error(`${newContact.name} is allready in phonebook`);
      return;
    }

    this.setState(state => ({
      contacts: [...state.contacts, newContact],
    }));
  };

  deleteContactFromState = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChanges = filter => {
    this.setState({ filter });
  };

  render() {
    console.log('render');
    const { contacts, filter } = this.state;

    const filteredContacts = filterContacts(contacts, filter);

    return (
      <>
        <h1 className={styles.headText}>Phonebok</h1>
        <ContactForm addContactIntoState={this.addContactIntoState} />

        <h2 className={styles.headText}>Contacts</h2>
        <Filter filter={filter} onFilter={this.handleFilterChanges} />
        <ContactList
          renderContacts={filteredContacts}
          deleteContacts={this.deleteContactFromState}
        />
      </>
    );
  }
}