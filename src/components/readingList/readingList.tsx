import { useBooksStore } from '../../store/books/books.store';

const ReadingList = () => {
  const readingList = useBooksStore((store) => store.readingList);
  const removeBookFromList = useBooksStore((store) => store.removeBookFromList)

  return (
    <div>
      {readingList.map(({book}) => (
        <h2 onClick={() => removeBookFromList(book.ISBN)} key={book.ISBN}>{book.title}</h2>
      ))}
    </div>
  );
}

export default ReadingList;