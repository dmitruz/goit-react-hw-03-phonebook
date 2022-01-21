import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactListElement.module.css';

function ContactListElement({ renderContacts, deleteContacts }) {
  return (
    <>
     {renderContacts.map(contact => (
        <li className={styles.contactListElement} key={contact.id}>
          <span className={styles.deleteText}>{`${contact.name}: ${contact.number}`}</span>
          <button type="button" className={styles.deleteBtn} onClick={() => deleteContacts(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </>
  );
}

ContactListElement.propTypes = {
  renderContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  deleteContacts: PropTypes.func.isRequired,
};

export default ContactListElement;