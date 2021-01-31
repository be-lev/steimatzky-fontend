import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import BookModel from "../Models/BooksModel";
import "./AddBook.css";

function AddBooks(): JSX.Element {

    const history = useHistory();

    //TODO: change to new react format
    const generesStateArray = useState<BookModel[]>([])
    const generes = generesStateArray[0]
    const setGeneres = generesStateArray[1]

    useEffect(()=>{
        (async function (){
const response = await axios.get<BookModel[]>("http://localhost:3003/api/books/generes");
const generes = response.data
setGeneres(generes)
        })()
        //! ask Assaf about this error
    },[])

    const {register, handleSubmit} = useForm<BookModel>()

    async function send(book: BookModel) {
        try{
            const response = await axios.post<BookModel> ("http://localhost:3003/api/books", book)
            const addedBook = response.data

        } catch (err) {
            console.log(err);
            alert("Error");
          }
    }

    return (
        <div className="AddBooks">
			
        </div>
    );
}

export default AddBooks;
