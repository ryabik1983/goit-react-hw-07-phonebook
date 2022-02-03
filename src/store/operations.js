import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import action from './action';
import {addContactsRequest, addContactsSuccess, addContactsError } from './action';

axios.defaults.baseURL = 'https://61efe336732d93001778e67c.mockapi.io';


export const addContact = text => dispatch => {
    const contacts = {
        text,
        completed: false
    };
    dispatch(addContactsRequest);
    axios
    .post('/contacts/contacts', contacts)
    .then(({data}) => 
        dispatch(addContactsSuccess(data)),
        )
    .catch(error => dispatch(addContactsError(error)));
};