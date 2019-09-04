import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

// Initial State
const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Sample John',
        email: 'john@gmail.com',
        phone: '222-333-4444',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Sample Smith',
        email: 'smith@gmail.com',
        phone: '555-666-7777',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Sample Mike',
        email: 'mike@gmail.com',
        phone: '888-000-6666',
        type: 'professional'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
