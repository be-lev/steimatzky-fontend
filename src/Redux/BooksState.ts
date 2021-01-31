import BookModel from "../Components/BooksArea/Models/BooksModel";

export class BooksState {
    public books: BookModel[] = [];
}

export enum BooksActionType {
    BooksDownloaded,
    BookAdded
}

export interface BooksAction {
    type: BooksActionType;
    payload?: any;
}

export function bookDownloadedAction(books: BookModel[]): BooksAction {
    return { type: BooksActionType.BooksDownloaded, payload: books }
}

export function bookAddedAction(book: BookModel): BooksAction {
    return { type: BooksActionType.BookAdded, payload: book }
}

export function booksReducer(currentState: BooksState = new BooksState(), action: BooksAction): BooksState{
    const newState = {...currentState};

    switch ( action.type) {

        case BooksActionType.BooksDownloaded:
            newState.books=action.payload;
            break;
        case BooksActionType.BookAdded:
            newState.books.push(action.payload);
            break;
    }
    return newState;
}