import { createAction } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';

const asyncActionCreator = arg => dispatch => {

};

dispatch(asyncActionCreator(5));

export const addContact = createAction('add');
export const deleteContact = createAction('delete');
export const filterContacts = createAction('filter');
