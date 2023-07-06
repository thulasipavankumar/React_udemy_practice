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
    const editBookById = (id,newtitle) => {
        setBooks(books.map(book=>book.id===id?{...book,title:newtitle}:book))
    }
    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}></BookList>
            <BookCreate onCreate={createBook}></BookCreate>
        </div>
    )
}

export default App