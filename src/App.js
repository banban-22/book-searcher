import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Book from './Book/Book';
import BookDetail from './Book/BookDetail';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/" element={<Book />} />
      <Route path="/books/:id" element={<BookDetail />} />
    </Routes>
  );
};

export default App;
