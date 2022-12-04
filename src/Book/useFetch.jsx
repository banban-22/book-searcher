import { useState, useEffect } from 'react';

const API_ENDPOINT = 'https://www.googleapis.com/books/v1/volumes';

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: '' });
  const [data, setData] = useState(null);

  const fetchBook = async (url) => {
    setIsLoading(true);

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.totalItems > 0) {
        setData(data.items || data);
        setError({ show: false, msg: '' });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchBook(`${API_ENDPOINT}${urlParams}`);
    }, 500);

    return () => clearTimeout(timer);
  }, [urlParams]);

  return { isLoading, error, data };
};

export default useFetch;
