import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import BookItem from './BookItem';
import {editBook} from '../redux/actions';

const BookList = () => {
const dispatch= useDispatch()
    const books = useSelector(state => state.books);
    const handleEdit = (book) => {
        dispatch(editBook(book));

        console.log('Edit book:', book);
    };

    return (
        <div className="book-list">
<h1>Books List</h1>
            {books.map(book => (
                <BookItem key={book.id} book={book} onClick={handleEdit} />
            ))}
        </div>
    );
};

export default BookList;
