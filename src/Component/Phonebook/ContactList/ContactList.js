import React from 'react';
import PropTypes from 'prop-types';
import ContactListElement from './ContactListElement';

const ContactList = ({ renderContacts, deleteContacts }) => (
  <ul>
    <ContactListElement
      renderContacts={renderContacts}
      deleteContacts={deleteContacts}
    />
  </ul>
);

ContactList.propTypes = {
  renderContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  deleteContacts: PropTypes.func.isRequired,
};

export default ContactList;