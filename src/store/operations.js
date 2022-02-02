import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import action from './action';
import actions from './action';

axios.defaults.baseURL = 'https://61efe336732d93001778e67c.mockapi.io';


export const addContact = text => dispatch => {
    const contacts = {
        text,
        completed: false
    };
    dispatch(actions.addContactsRequest);
    axios
    .post('/contacts/contacts', contacts)
    .then(({data}) => 
        dispatch(actions.addContactsSuccess(data)),
        )
    .catch(error => dispatch(actions.addContactsError(error));
};