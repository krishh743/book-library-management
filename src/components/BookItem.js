import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteBook, editBook} from '../redux/actions';
import {Button, Stack} from '@mui/material';

const BookItem = ({book, onClick}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteBook(book.id));
    };

    const handleEdit = () => {
        dispatch(editBook(book));
    };

    return (
        <div className='books-info'>
            <Stack direction={"column"} spacing={3} justifyContent={"center"} >

                <Stack direction={"row"} spacing={3} justifyContent={"center"} >
                    <span className='books-text'>
                        Title :
                    </span>
                    <span className='books-text'>
                        {book.title}
                    </span>
                </Stack>
                <Stack direction={"row"} spacing={3} justifyContent={"center"} >

                    <span className='books-text'>
                        Auther Name :
                    </span>
                    <span className='books-text'>
                        {book.author}
                    </span>
                </Stack>
                <Stack direction={"row"} spacing={3} justifyContent={"center"} >


                    <span className='books-text'>
                        Genre :
                    </span>
                    <span className='books-text'>
                        {book.genre}
                    </span>
                </Stack>
                <Stack direction={"row"} spacing={3} justifyContent={"center"} >

                    <Button sx={{width: "250px"}}
                        variant="contained" color="secondary" onClick={handleEdit}>Edit</Button>
                    <Button sx={{width: "250px"}}
                        variant="contained" color="secondary" onClick={handleDelete}>Delete</Button>
                </Stack>
            </Stack>

        </div>
    );
};

export default BookItem;
