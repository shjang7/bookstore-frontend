import React from 'react';
import PropTypes from 'prop-types';
import { capitalize } from '../assets/utils';

const Book = ({ title, category, remove }) => {
  return (
    <div className="book d-md-flex justify-content-between">
      <div className="order-1">
        <div className="category">{capitalize(category)}</div>
        <div className="title">{title}</div>
        <div className="remove">
          <button onClick={remove}>remove</button>
        </div>
      </div>
      <div className="order-2">
        <div className="current-chapter">CURRENT CHAPTER</div>
        <div className="current-lesson">CHAPTER 1</div>
        <button className="rectangle-2 simulation-button">
          <div className="update-progress mx-auto">update progress</div>
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Book;
