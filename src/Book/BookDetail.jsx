import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from './useFetch';
import { BsArrowRightCircle } from 'react-icons/bs';

const BookDetail = () => {
  const { id } = useParams();
  const { isLoading, error, data: book } = useFetch(`/${id}`);
  console.log(isLoading);
  console.log(book);
  console.log(error);
  if (isLoading) {
    return <div className="loading">...</div>;
  }

  if (error.show) {
    return (
      <div>
        <h1>{error.msg}</h1>
        <Link to="/">back to books</Link>
      </div>
    );
  }

  const { title, authors, thumbnail, description, publishedDate, isEbook } =
    book;

  return (
    <section>
      <div className="">
        <img src={thumbnail} alt={title} className="" />
        <div className="m-8 grid grid-cols-2 gap-2">
          <h2 className="">{title}</h2>
          <h3 className="">Author</h3>
          <h4 className="">{authors}</h4>
          <h3 className="">Description</h3>
          <p className="">{description}</p>
          <h3 className="">Publish Year</h3>
          <p className="">{publishedDate}</p>
          <h3 className="">Is Ebook Available?</h3>
          <p className="">{isEbook ? 'Yes' : 'No'}</p>
        </div>
      </div>
      <Link to="/" className="">
        Back to Search
        <BsArrowRightCircle className="" />
      </Link>
    </section>
  );
};

export default BookDetail;
