import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://61efe336732d93001778e67c.mockapi.io';


export const addContact = text => dispatch => {
    const contacts = {
        text,
        completed: false
    };
    dispatch({type: 'contacts/addContactsRequest'});
    axios
    .post('/contacts/contacts', contacts)
    .then(({data}) => 
        dispatch({type: 'contacts/addContactsSuccess', payload: data}),
        )
    .catch(error => dispatch({type:'contacts/addContactsError', payload: error}));
};