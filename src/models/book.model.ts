interface Author {
  name: string;
  otherBooks: string[];
}

interface Book {
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