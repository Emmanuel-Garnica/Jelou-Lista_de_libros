import { create } from 'zustand';
import { BookStore, LibraryItem } from './book.entity';

export const useBooksStore = create<BookStore>((set, get) => ({
  books: [],
  readingList: [],
  computed: {
    get heroBooks(): LibraryItem[] {
      return get().books.slice(0, 5);
    },
  },
  setBooks(books) {
    set({ ...get(), books });
  },
  addBookToList(book: LibraryItem) {
    set({ ...get(), readingList: [...get().readingList, book] });
  },
  removeBookFromList(bookId: string) {
    const readingList = get().readingList.filter(
      ({book}) => book.ISBN !== bookId
    );
    set({ ...get(), readingList });
  },
}));