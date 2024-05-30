import { useEffect, useState } from 'react';
import { LibraryItem } from '../../models/book.model';
import { Book } from '../book';


const BooksList = () => {
  const [books, setBooks] = useState<LibraryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev/');
        const data = await response.json();
        setBooks(data.default.library);
      } catch (err) {
        setError('Failed to fetch books');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((item, index) => (
        /* <div key={index} className="border p-4 rounded-lg shadow-lg">
          <img src={item.book.cover} alt={item.book.title} className="h-48 w-full object-cover rounded-md" />
          <h2 className="text-xl font-bold mt-2">{item.book.title}</h2>
          <p className="text-gray-600">{item.book.year}</p>
          <p className="text-gray-700 mt-2">{item.book.synopsis}</p>
        </div> */
        <Book key={index} cover={item.book.cover} title={item.book.title}/>
      ))}
    </section>
  );
};

export default BooksList;
