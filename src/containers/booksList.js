import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBooks, removeBook, changeFilter } from '../actions';
import Book from '../components/book';
import CategoryFilter from '../components/categoryFilter';

const BooksList = ({ books, errors, getBooks, removeBook, filter, changeFilter }) => {
  useEffect(() => {
    getBooks();
  // eslint-disable-next-line
  }, []);

  const handleRemoveBook = async (bookId) => {
    await removeBook(bookId);
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
            key={book.id}
            {...book}
            remove={() => handleRemoveBook(book.id)}
          />
        ))}
      </div>
    );
  };
  return (
    <div className="bg-white">
      <CategoryFilter filter={filter} handleChange={handleFilterChange} />
      <div className="error">{ errors ? errors : ''}</div>
      {renderBooks()}
    </div>
  );
};

BooksList.defaultProps = { books: [{}], filter: '' };

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ),
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  getBooks: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default connect(
  ({ books, filter, errors }) => ({ books, filter, errors }),
  { getBooks, removeBook, changeFilter },
)(BooksList);
