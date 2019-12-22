import React from 'react';
import PropTypes from 'prop-types';
import options from '../assets/manifest.json';
import { capitalize } from '../assets/utils';

const CategoryFilter = ({ filter, handleChange }) => {
  const renderOption = (data) => {
    const { id, value } = data;
    return (
      <option key={id} value={value}>
        {capitalize(value)}
      </option>
    );
  };
  return (
    <div className="filter">
      <h4 className="title">Category Search</h4>
      <select
        name="category"
        value={filter}
        onChange={handleChange}
        className="category"
      >
        <option value="all">All</option>
        {options.category.map(data => renderOption(data))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
