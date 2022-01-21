import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
export default class Filter extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired,
  };

  handleChange = e => {
    const { value } = e.target;
    const { onFilter } = this.props;

    onFilter(value);
  };

  render() {
    const { filter } = this.props;

    return (
      <>
      <p className={styles.filterText}>Find contacts by name</p>
      <input className={styles.inputFind}
        type="text"
        placeholder="Enter number..."
        name="filter"
        value={filter}
        onChange={this.handleChange}

        
        />
      </>
    );
  }
}