import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { books } from "./Books";
import Book from "./Book";
//setup vars

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
