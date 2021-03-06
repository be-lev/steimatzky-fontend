import BookModel from "../Models/BooksModel";
import "./BookCard.css";

interface BookCardProps {
  singleBook: BookModel;
}
function BookCard(props: BookCardProps): JSX.Element {
  return(<div className="BookCard">
 Genre: {props.singleBook.bookType} <br/>
 Name: {props.singleBook.name} <br/>
 Description: {props.singleBook.description} <br/>
 Price: {props.singleBook.price} <br/>
 Stock: {props.singleBook.stock} <br/>
  </div>);
}

export default BookCard;
