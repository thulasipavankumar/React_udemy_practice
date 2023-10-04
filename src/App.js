import React, { useContext } from "react"
import { useEffect } from "react"
import BookList from "./components/BookList"
import BookCreate from "./components/BookCreate"

import BooksContext from "./context/books"
const App = () => {

    const {fetchBooks} = useContext(BooksContext)
   
    useEffect(()=>{
        fetchBooks();
    },[])
    
    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList ></BookList>
            <BookCreate ></BookCreate>
        </div>
    )
}

export default App