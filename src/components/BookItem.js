import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {deleteBook, editBook} from '../redux/actions';
import {Button, Stack, TextField} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const BookItem = ({book, onClick}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteBook(book.id));
    };

    const handleEdit = () => {
        setEditedBook(book);
        setOpen(true);
    };

    const handleSave = () => {
        dispatch(editBook(editedBook));
        setOpen(false);
    };

    const [open, setOpen] = useState(false);
    const [editedBook, setEditedBook] = useState(book);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setEditedBook((prevBook) => ({
            ...prevBook,
            [name]: value,
        }));
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="books-info">
            <Stack direction={'column'} spacing={3} justifyContent={'center'}>
                <Stack direction={'row'} spacing={3} justifyContent={'center'}>
                    <span className="books-text">Title :</span>
                    <span className="books-text">{book.title}</span>
                </Stack>
                <Stack direction={'row'} spacing={3} justifyContent={'center'}>
                    <span className="books-text">Author Name :</span>
                    <span className="books-text">{book.author}</span>
                </Stack>
                <Stack direction={'row'} spacing={3} justifyContent={'center'}>
                    <span className="books-text">Genre :</span>
                    <span className="books-text">{book.genre}</span>
                </Stack>
                <Stack direction={'row'} spacing={3} justifyContent={'center'}>
                    <Button
                        sx={{width: '250px'}}
                        variant="contained"
                        color="secondary"
                        onClick={handleEdit}
                    >
                        Edit
                    </Button>
                    <Button
                        sx={{width: '250px'}}
                        variant="contained"
                        color="secondary"
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>
                </Stack>
            </Stack>

            <div className="dialog-box">
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Edit Book Details</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <Stack spacing={3}>
                                <TextField
                                    name="title"
                                    label="Title"
                                    value={editedBook.title}
                                    onChange={handleInputChange}
                                    fullWidth
                                />
                                <TextField
                                    name="author"
                                    label="Author"
                                    value={editedBook.author}
                                    onChange={handleInputChange}
                                    fullWidth
                                />
                                <TextField
                                    name="genre"
                                    label="Genre"
                                    value={editedBook.genre}
                                    onChange={handleInputChange}
                                    fullWidth
                                />
                            </Stack>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Stack direction={"row"} spacing={9} justifyContent={"center"} alignItems={"center"} >
                            <Button variant='contained' color="secondary" onClick={handleClose}>Cancel</Button>
                            <Button variant='contained' color="success" onClick={handleSave} autoFocus>
                                Save
                            </Button>
                        </Stack>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
};

export default BookItem;
