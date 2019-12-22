import React from 'react';
import BooksList from '../containers/booksList';
import BooksForm from '../containers/booksForm';
import NavBar from './navBar';

function App() {
  return (
    <div className="app">
      <NavBar />
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
