import { createAction } from '@reduxjs/toolkit';

export const addContactsRequest = createAction('contacts/addContactsRequest');
export const addContactsSuccess = createAction('contacts/addContactsSuccess');
export const addContactsError = createAction('contacts/addContactsError');

// import { useDispatch } from 'react-redux';





// dispatch(asyncActionCreator(5));

// const addContact = text => dispatch => {

// }

// export const addContact = createAction('add');
// export const deleteContact = createAction('delete');
export const filterContacts = createAction('filter');
// export default {
//     addContactsRequest,
//     addContactsSuccess,
//     addContactsError,
//     filterContacts,
// }
