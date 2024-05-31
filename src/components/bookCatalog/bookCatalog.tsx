import { useBooksStore } from "@/store/books/books.store";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { useEffect, useState } from "react";
import { LibraryItem, Book } from "@/store/books/book.entity";

const BookCatalog = () => {

  const books = useBooksStore((store) => store.books)
  const addBookToList = useBooksStore((store) => store.addBookToList)
  const [filteredBooks, setFilteredBooks] = useState<LibraryItem[]>([])
  //const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    setFilteredBooks(books)
  }, [books])
  
  const handleFilter = (value: string) => {
    const foundBooks = books.filter((book) => book.book.genre === value )
    setFilteredBooks(foundBooks)  
  }

  const handleClick = (book: Book) => {
    addBookToList({ book })
    
  }
  
  return (
    <>
      <Select onValueChange={handleFilter}>
        <SelectTrigger className="w-[180px] mx-auto my-8">
          <SelectValue placeholder="Filtra por género" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Terror">Terror</SelectItem>
          <SelectItem value="Ciencia ficción">Ciencia ficción</SelectItem>
          <SelectItem value="Fantasía">Fantasía</SelectItem>
          <SelectItem value="Zombies">Zombies</SelectItem>
        </SelectContent>
      </Select>
      <section className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredBooks.map(({book}) => (
          <div onClick={() => handleClick( book )} key={book.ISBN} className="relative border p-4 rounded-lg shadow-lg cursor-pointer hover:border-primary">
              <img src={book.cover} alt={book.title} className="h-48 aspect-[0.7] w-auto object-cover mx-auto" />
              <h2 className="text-xl font-bold mt-2">{book.title}</h2>
              <p className="text-gray-600">{book.year}</p>
              <p className="text-gray-700 mt-2">{book.synopsis}</p>
              <span className="absolute right-0 top-0 rounded-bl-md rounded-tr-md px-2 py-1 text-white font-semibold bg-gradient-to-r from-red via-primary to-secondary">{book.genre}</span>
            </div> 
        ))}
      </section>
    </>
    
  )
}

export default BookCatalog;