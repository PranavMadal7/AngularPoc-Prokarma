export interface Book {
  id: string;
  title: string;
  authors: string[];
  description: string;
  publisher: string;
  averageRating: number;
  imageLinks: string;
  pageCount: number;
  language: string;
}

export interface SearchBook {
  kind: string;
  totalItems: number;
  items: Book[];
}

export interface User {
  name: string;
  email: string;
  mobile: string;
  address: string;
}
