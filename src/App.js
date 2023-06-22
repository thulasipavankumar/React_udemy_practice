import React from "react"
import { useState } from "react"
import BookList from "./components/BookList"
import BookCreate from "./components/BookCreate"
const App = () => {

    const [books, setBooks] = useState([])
    const deleteBookById = (id) => {
        setBooks(books.filter((book) => book.id !== id))
    }
    const createBook = (title) => {
        const updatedBooks = [...books, { id: Math.round(Math.random() * 999), title }]

        setBooks(updatedBooks)
        console.log(`provided title is ${title} ${books.length}`)
    }
    return (
        <div className="app">
            <BookList books={books} onDelete={deleteBookById}></BookList>
            <BookCreate onCreate={createBook}></BookCreate>
        </div>
    )
}

export default App