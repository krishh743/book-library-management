import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {addBook, editBook} from '../redux/actions';
import {Button, Stack, TextField} from '@mui/material';

const BookForm = ({book}) => {
    const [title, setTitle] = useState(book ? book.title : '');
    const [author, setAuthor] = useState(book ? book.author : '');
    const [genre, setGenre] = useState(book ? book.genre : '');
    const dispatch = useDispatch();

    useEffect(() => {
        if (book) {
            setTitle(book.title);
            setAuthor(book.author);
            setGenre(book.genre);
        }
    }, [book]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBook = {
            id: book ? book.id : Date.now(),
            title,
            author,
            genre
        };

        if (book) {
            dispatch(editBook(newBook));
        } else {
            dispatch(addBook(newBook));
        }

        setTitle('');
        setAuthor('');
        setGenre('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Stack direction={"column"} spacing={4} justifyContent={"center"} alignItems={"center"}>
                <TextField

                    sx={{width: "500px"}}
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    sx={{width: "500px"}}

                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <TextField
                    sx={{width: "500px"}}

                    type="text"
                    placeholder="Genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                />
                <Button variant='contained' sx={{width: "500px"}}
                    color="success" type="submit">{book ? 'Save' : 'Add'}</Button>
            </Stack>
        </form>
    );
};

export default BookForm;
