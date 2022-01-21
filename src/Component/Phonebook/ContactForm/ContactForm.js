import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid'; // usage - uuidv4();
import styles from './ContactForm.module.css';

export default class ContactForm extends Component {
  static propTypes = {
    addContactIntoState: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleFormSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { addContactIntoState } = this.props;

    addContactIntoState({
      id: uuidv4(),
      name,
      number,
    });

    this.clearInputs();
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  clearInputs = () =>
    this.setState({
      name: '',
      number: '',
    });

  render() {
    const { name, number } = this.state;

    return (
        <form className={styles.submitForm} onSubmit={this.handleFormSubmit}>
        
        <label className={styles.submitFormLabel} htmlFor="name">
          Name
          <input className={styles.submitFormInput}
            type="text"
            placeholder="Enter name..."
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.submitFormLabel} htmlFor="number">
          Number
          <input className={styles.submitFormInput}
            type="text"
            placeholder="Enter number..."
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        
        <div>
          <button className={styles.submitFormBtn} type="submit">Add contact</button>
        </div>
      </form>
    );
  }
}