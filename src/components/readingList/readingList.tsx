import { useBooksStore } from '../../store/books/books.store';

const ReadingList = () => {
  const readingList = useBooksStore((store) => store.readingList);
  const removeBookFromList = useBooksStore((store) => store.removeBookFromList)

  return (
    <div className='flex items-center justify-center flex-wrap gap-4 w-full p-4 pt-2 rounded-xl border border-solid shadow-lg'>
      <h2 className=' w-full'>
        <p className='text-xl font-bold mt-2 text-primary'>Tu lista de lectura</p>
        <p className='text-sm italic mb-2 w-full'>Puedes clickear en el libro que ya no quieras en tu lista</p>
      </h2>
      {readingList.map(({book}, index) => (
        <div key={index} onClick={() => removeBookFromList(book.ISBN)} className='p-2 border border-dashed rounded-lg cursor-pointer hover:border-red'>
          <img src={book.cover} alt={book.title} className="h-24 aspect-[0.7] w-auto object-cover mx-auto" />
          <h3 className="text-base mt-2 italic">{book.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default ReadingList;