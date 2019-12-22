import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook, changeFilter } from '../actions';
import Book from '../components/book';
import CategoryFilter from '../components/categoryFilter';

const BooksList = ({ books, removeBook, filter, changeFilter }) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  const handleFilterChange = ({ target: { value } }) => {
    changeFilter(value.toLowerCase());
  };

  const renderBooks = () => {
    const filteredBooks
      = filter === 'all'
        ? books
        : books.filter(({ category }) => category === filter);
    return (
      <div className="books-list">
        {filteredBooks.map(book => (
          <Book
            key={book.bookId}
            {...book}
            remove={() => handleRemoveBook(book)}
          />
        ))}
      </div>
    );
  };
  return (
    <div className="bg-white">
      <CategoryFilter filter={filter} handleChange={handleFilterChange} />
      {renderBooks()}
    </div>
  );
};

BooksList.defaultProps = { books: [{}] };

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      bookId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ),
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default connect(
  ({ books, filter }) => ({ books, filter }),
  { removeBook, changeFilter },
)(BooksList);
