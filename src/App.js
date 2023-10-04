import React from "react"
import { useState,useEffect } from "react"
import BookList from "./components/BookList"
import BookCreate from "./components/BookCreate"
import axios from "axios"
const App = () => {

    const [books, setBooks] = useState([])
    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`)
        setBooks(books.filter((book) => book.id !== id))
    }
    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    }
    const createBook = async (title) => {

        const response = await axios.post('http://localhost:3001/books', {
            title,
        })
        const updatedBooks = [...books, response.data]

        setBooks(updatedBooks)
    }
    useEffect(()=>{
        fetchBooks();
    },[])
    const editBookById = async (id, newtitle) => {
        const responce = await axios.put(`http://localhost:3001/books/${id}`,{
            title:newtitle
        })
        console.log(responce)
        const updatedBooks = books.map(book=>{
            if (book.id === id){
                return  { ...book, ...responce.data }
            }
            return book
        })
        setBooks(updatedBooks);
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