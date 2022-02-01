import {createAction} from '@reduxjs/toolkit';

export const addContact = createAction('add');
export const deleteContact = createAction('delete');
export const filterContacts = createAction('filter');
