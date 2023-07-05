import './App.css';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

const App = () => {
  return (
    <div className='App'>
      <h1>Book Library</h1>
      <BookForm />
      <BookList />
    </div>
  );
};


export default App;
