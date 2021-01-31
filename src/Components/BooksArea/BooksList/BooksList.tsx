import axios from "axios";
import React, { Component } from "react";
import { bookDownloadedAction } from "../../../Redux/BooksState";
import store from "../../../Redux/Store";
import BookCard from "../BookCard/BookCard";
import BookModel from "../Models/BooksModel";

interface BooksListState {
  books: BookModel[];
}
class BooksList extends Component<{},BooksListState> {
  public constructor(props: {}) {
    super(props);
    this.state = { books: store.getState().books };
  }

  public async componentDidMount() {
    try {
      if (store.getState().books.length === 0) {
        console.log("(Going to server...)");
        const response = await axios.get<BookModel[]>(
          "http://localhost:3003/api/books"
        );
        const action = bookDownloadedAction(response.data);
        store.dispatch(action);
        this.setState({ books: store.getState().books });
      }
    } catch (err) {
      console.log(err);
      alert("Error");
    }
  }

  public render(): JSX.Element {
    return <div className="BooksList">
        <h2>Books list</h2>
        {this.state.books.map(b=> <BookCard key={b.bookId} singleBook={b} />)}
    </div>;
  }
}

export default BooksList;
