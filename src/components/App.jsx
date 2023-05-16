import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './Container/Container';
import { FormContacts } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

const KEY = 'contacts';

export function App() {
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem(KEY)) ?? []);
  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem(KEY, JSON.stringify(contacts));
  }, [contacts]);

  function addContact(name, number) {
    let checkName = contacts.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    let checkNumber = contacts.some(item => {
      let stateNumber = parseInt(item.number.replace(/[^\d]/g, ''));
      let newNumber = parseInt(number.replace(/[^\d]/g, ''));
      return stateNumber === newNumber;
    });

    if (checkName) return window.alert(`${name} is already in contacts`);
    if (checkNumber) return window.alert(`${number} is already in contacts`);

    const contact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prevContacts => [...prevContacts, contact]);
  }

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
    <Container>
      <h1>Phonebook</h1>
      <FormContacts onSubmit={addContact} />

      <h2>Contacts</h2>

      <Filter onChange={changeFilter} value={filter} />
      <ContactsList
        contacts={visibleContacts}
        onClickButtonDelete={deleteContact}
      />
    </Container>
  );
}
