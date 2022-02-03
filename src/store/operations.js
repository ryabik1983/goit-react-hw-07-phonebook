import { createAsyncThunk } from '@reduxjs/toolkit';
import * as fetchService from './services';

export const fetchContacts = createAsyncThunk(
  'fetchContactsSuccess',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchService.fetchContacts();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number: phone }, { rejectWithValue }) => {
    try {
      const contact = { name, phone };
      const response = await fetchService.addContacts(contact);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await fetchService.deleteContacts(contactId);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);