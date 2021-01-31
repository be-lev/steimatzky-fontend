import React from "react";
import { BrowserRouter, NavLink, Redirect, Route, Switch  } from "react-router-dom";
import AddBook from "../../BooksArea/AddBooks/AddBook";
import BooksList from "../../BooksArea/BooksList/BooksList";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <BrowserRouter>
        <div className="Layout">
			<h1>Welcome to Steimatzky books store</h1>
            <h3>This is the place to find all your books</h3>
            <nav>
                <NavLink to="/books">Books list</NavLink>
                <span> | </span>
                <NavLink to="/add-book">Add books</NavLink>
            </nav>
            <hr/>

            <Switch>
                <Route path="/books" component={BooksList} exact/>
                <Route path="add-book" component={AddBook} exact/>
                <Redirect from="/" to="/books" exact />
            </Switch>
        </div>
        </BrowserRouter>
    );
}

export default Layout;
