export interface Author {
  name: string;
  otherBooks: string[];
}

export interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: Author;
}

export interface LibraryItem {
  book: Book;
}

interface Computed {
  heroBooks: LibraryItem[];
}

export interface BookState {
  books: LibraryItem[];
  readingList: LibraryItem[];
  computed: Computed;
}

export interface BookActions {
  setBooks: (books: LibraryItem[]) => void;
  addBookToList: (book: LibraryItem) => void;
  removeBookFromList: (bookId: string) => void;
}

export type BookStore = BookState & BookActions;

export interface BookApiResponse {
  default: {
    library: LibraryItem[];
  };
}