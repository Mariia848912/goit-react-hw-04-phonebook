import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './Container/Container';
import { FormContacts } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

const KEY = "contacts";
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem(KEY);
    const parseContacts = JSON.parse(contacts)

    if (parseContacts) {
  this.setState({contacts: parseContacts})
}
    
  }
  
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
   
    if (contacts !== prevState.contacts) {
      localStorage.setItem(KEY, JSON.stringify(contacts))
    }
  }

  
  addContact = (name, number) => {
    let checkName = this.state.contacts.some(item => item.name.toLowerCase() === name.toLowerCase())
    let checkNumber = this.state.contacts.some(item => {
      let stateNumber = parseInt(item.number.replace(/[^\d]/g, ""));
      let newNumber = parseInt(number.replace(/[^\d]/g, ""));
      return stateNumber === newNumber;
    })
    
    if (checkName)
      return window.alert(`${name} is already in contacts`);
    if (checkNumber)
      return window.alert(`${number} is already in contacts`);
    
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    // console.log("componentDidMount");
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <h1>Phonebook</h1>
        <FormContacts onSubmit={this.addContact} />

        <h2>Contacts</h2>

        <Filter onChange={this.changeFilter} value={filter} />
        <ContactsList
          contacts={visibleContacts}
          onClickButtonDelete={this.deleteContact}
        />
      </Container>
    );
  }
}
