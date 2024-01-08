import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectFilter, selectContacts } from '../../redux/contacts/selectors';
import { createSelector } from '@reduxjs/toolkit';

const ContactList = () => {

  const dispatch = useDispatch();

  const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
    )
  );
  
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <div>
            <div>
              <p>{name}: </p>
            </div>
            <div>
              <p>{number}</p>
            </div>
            <button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactList