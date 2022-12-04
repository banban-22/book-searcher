// // https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBBrTEx6ovsdl8HTZGkM07yvma6KmRmS6E
import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalBookContext } from './context/BookContext';
import SearchBook from './SearchBook';

const Book = () => {
  const { books, isLoading } = useGlobalBookContext();

  if (isLoading) {
    return <div className="loading">...</div>;
  }

  return (
    <section className="w-full">
      <SearchBook />
      <div className="m-8 grid grid-cols-2 gap-2">
        {books.map((item) => {
          let { id, title, author, thumbnail } = item;
          thumbnail =
            item.volumeInfo.imageLinks &&
            item.volumeInfo.imageLinks.smallThumbnail;
          author = item.volumeInfo.authors[0];
          title = item.volumeInfo.title;

          return (
            <Link to={`/books/${id}`} key={id} className="book">
              <div>
                <img src={thumbnail} alt={title} className="" />
                <div className="">
                  <p>{title}</p>
                  <p>{author}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Book;
