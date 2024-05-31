import React from 'react';
import { Book } from '../book';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useAppController } from '@/controllers/app.controller';
import { useBooksStore } from '@/store/books/books.store';

const BooksList = () => {
  const books = useBooksStore((store) => store.books);
  //const addBookToList = useBooksStore((store) => store.addBookToList);
  const { loading } = useAppController()


  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  if (loading) return <div>Loading...</div>;

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
          {books.map(({book}) => (
            <CarouselItem className='' key={book.ISBN}>
              <Book cover={book.cover} title={book.title}/>
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
