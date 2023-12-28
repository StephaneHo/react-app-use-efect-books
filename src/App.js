import { useEffect, useState } from "react";

import axios from "axios";
import { BookCreate } from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    // setBooks(response.data);
  };
  /* 
  useEffect(() => {

  }, []); */

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        //     return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    // const updatedBooks = [...books, response.data];
    //  setBooks(updatedBooks);
  };

  return (
    <div className="mx-20">
      <h1 className="text-3xl font-bold underline mx-20 my-20">Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
