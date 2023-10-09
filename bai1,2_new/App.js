import logo from './logo.svg';
import './App.css';
import {ToDoList} from "./component/todolist";
import {Book} from "./component/book";
import {Route, Routes} from "react-router-dom";
import {BookCreate} from "./service/BookCreate";
import {BookUpdate} from "./service/BookUpdate";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Book/>}>
        </Route>
        <Route path="/create" element={<BookCreate/>}>
        </Route>
          <Route path="/update/:id" element={<BookUpdate/>}>
          </Route>
      </Routes>
  );
}

export default App;
