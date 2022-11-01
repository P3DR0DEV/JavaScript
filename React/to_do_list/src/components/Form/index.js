import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import './Form.css';

export default function Form({ handleSubmit, handleInputChange, novaTarefa }) {
  return (
    <form action="#" className="form" onSubmit={handleSubmit}>
      <input type="text" value={novaTarefa} onChange={handleInputChange} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
