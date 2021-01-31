
import {createStore} from "redux"
import {booksReducer} from "./BooksState"

const store = createStore(booksReducer);

export default store;


// If we have multiple reducers: 
// import { combineReducers, createStore } from "redux";
// const reducers = combineReducers({furnitureReducer, employeesReducer, customersReducer});
// const store = createStore(reducers);