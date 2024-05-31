import { BookApiResponse, LibraryItem } from './book.entity';

export const fetchBooks = async (): Promise<LibraryItem[]> => {
  const response = await fetch(import.meta.env.VITE_API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  const data: BookApiResponse = await response.json();
  return data.default.library;
};
