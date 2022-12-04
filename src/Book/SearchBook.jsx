import React from 'react';
import { useGlobalBookContext } from './context/BookContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBook = () => {
  const { query, setQuery, error } = useGlobalBookContext();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className=""
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className=""
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} className="" />
      {error.show && <div>{error.msg}</div>}
    </form>
  );
};

export default SearchBook;
