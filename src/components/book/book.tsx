import './book.styles.css';

interface BookProps {
  cover: string; 
  title: string;
}

const Book = ( {cover, title}: BookProps ) => {
  return (
    /* <div key={index} className="border p-4 rounded-lg shadow-lg">
          <img src={item.book.cover} alt={item.book.title} className="h-48 w-full object-cover rounded-md" />
          <h2 className="text-xl font-bold mt-2">{item.book.title}</h2>
          <p className="text-gray-600">{item.book.year}</p>
          <p className="text-gray-700 mt-2">{item.book.synopsis}</p>
        </div> */
    <div className="book">
      <h3 className='absolute -left-6 top-1/2 -rotate-90 origin-center -translate-x-1/2 -translate-y-1/2 w-full font-bold md:text-xl xl:text-2xl'>
        {title}
      </h3>
      <span></span>
      <img src={cover} alt={title} title={title} />
    </div>
  )
}

export default Book;