import React, { useState, useContext } from 'react';
import useFetch from '../useFetch';

export const API_ENDPOINT = 'https://www.googleapis.com/books/v1/volumes';

const BookContext = React.createContext();

const BookProvider = ({ children }) => {
  const [query, setQuery] = useState('potter');
  const [favourite, setFavourite] = useState([]);
  const {
    isLoading,
    error,
    data: books,
  } = useFetch(
    `?q=${query}&key=${process.env.REACT_APP_BOOKS_API_KEY}&maxResults=40`
  );

  return (
    <BookContext.Provider value={{ isLoading, error, books, query, setQuery }}>
      {children}
    </BookContext.Provider>
  );
};

export const useGlobalBookContext = () => {
  return useContext(BookContext);
};

export { BookContext, BookProvider };
