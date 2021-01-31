import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { bookAddedAction } from "../../../Redux/BooksState";
import store from "../../../Redux/Store";
import BookModel from "../Models/BooksModel";
import GenreModel from "../Models/GenreModel";
import "./AddBook.css";

function AddBooks(): JSX.Element {
  const history = useHistory();

  //TODO: change to new react format
  const generesStateArray = useState<GenreModel[]>([]);
  const generes = generesStateArray[0];
  const setGeneres = generesStateArray[1];

  useEffect(() => {
    (async function () {
      const response = await axios.get<GenreModel[]>(
        "http://localhost:3003/api/books/generes"
      );
      const generes = response.data;
      setGeneres(generes);
    })();
    //! ask Assaf about this error
  }, []);

  const { register, handleSubmit } = useForm<BookModel>();

  async function send(book: BookModel) {
    try {
      const response = await axios.post<BookModel>(
        "http://localhost:3003/api/books",
        book
      );
      const addedBook = response.data;
console.log(addedBook);
      const action = bookAddedAction(addedBook);
      store.dispatch(action);
      alert("Book ID: " + addedBook.bookId + "has been successfully added");

      history.push("/books")
    } catch (err) {
      console.log(err);
      alert("Error");
    }
  }

  return <div className="AddBooks">
<h2>Add a book</h2>

<form onSubmit={handleSubmit(send)}>

<label>Genre: </label> <br/>
<select name="genre" defaultValue="0" ref={register}>
    <option disabled value="0">
        Select genre
    </option>
    {generes.map((g)=>(
        <option key={g.genre} value={g.genre}>{g.bookType}</option>
    ))}
</select>
<br/><br/>
<label>Name:</label> <br/>
<input type="text" name="name" ref={register}/>
<br/><br/>
<label>Description:</label> <br/>
<input type="text" name="description" ref={register}/>
<br/><br/>
<label>Price:</label> <br/>
<input type="number" step="0.01" name="price" ref={register}/>
<br/><br/>
<label>Stock:</label> <br/>
<input type="number" name="stock" ref={register}/>
<br/><br/>
<button>Add</button>
</form>

  </div>;
}

export default AddBooks;
