import axios from 'axios';

axios.defaults.baseURL = 'https://61efe336732d93001778e67c.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts/contacts');
  return data;
}

export async function addContacts(contact) {
  const { data } = await axios.post('/contacts/contacts', contact);
  return data;
}

export async function deleteContacts(contactId) {
  const {
    data: { id },
  } = await axios.delete(`/contacts/contacts/${contactId}`);
  return id;
}