import React from 'react';
import { useEffect, useState } from 'react';
import { LibraryItem } from '../../models/book.model';
import { Book } from '../book';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

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

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  

  return (
    <section className="w-full lg:w-1/2">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className='pb-8'>
          {books.map((item, index) => (
            /* <div key={index} className="border p-4 rounded-lg shadow-lg">
              <img src={item.book.cover} alt={item.book.title} className="h-48 w-full object-cover rounded-md" />
              <h2 className="text-xl font-bold mt-2">{item.book.title}</h2>
              <p className="text-gray-600">{item.book.year}</p>
              <p className="text-gray-700 mt-2">{item.book.synopsis}</p>
            </div> */
            <CarouselItem className='' key={index}>
              <Book cover={item.book.cover} title={item.book.title}/>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='text-red border-red -left-6 hover:bg-red hover:opacity-80 hover:text-white lg:left-0'/>
        <CarouselNext className='text-red border-red -right-6 hover:bg-red hover:opacity-80 hover:text-white lg:right-0 '/>
      </Carousel>
    </section>
  );
};

export default BooksList;
