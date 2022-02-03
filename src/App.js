import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactsList from './components/ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { addContactsRequest,
  addContactsSuccess,
  addContactsError,
  addContact,
  deleteContact,
  filterContacts,
  } from './action';
import './App.css';



export default function App() {

const dispatch = useDispatch()

return (
  
<main className="main">
    <h1 className="title">Phonebook</h1>
    <ContactForm onSubmit={(name, number) => dispatch(actions.addContact(name, number))}
    />
    <h2 className="title">Contacts</h2>
    <Filter/>
    <ContactsList/>
  </main>
)  
};