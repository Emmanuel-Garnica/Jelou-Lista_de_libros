import { useEffect, useState } from 'react';
import { useBooksStore } from '../store/books/books.store';
import { fetchBooks } from '../store/books/books.api';

export const useAppController = () => {
  const [toast, setToast] = useState({ open: false, msg: '' });
  const [loading, setLoading] = useState<boolean>(true);

  const setBooks = useBooksStore((store) => store.setBooks);

  useEffect(() => {
    (async function () {
      try {
        const books = await fetchBooks();
        setBooks(books);
      } catch (error) {
        setToast({
          open: true,
          msg: 'An error has ocurred when fetch data',
        });
      } finally {
        setLoading(false);
      }
    })();
  }, [setBooks]);

  return { toast, loading };
};
