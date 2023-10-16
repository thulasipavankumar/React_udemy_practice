import { createContext, useState,useCallback } from "react";
import axios from "axios"

const BooksContext = createContext();
function Provider({children}){
    const [books, setBooks] = useState([])
    const fetchBooks =  useCallback(async () => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    } ,[])
    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`)
        setBooks(books.filter((book) => book.id !== id))
    }

    const createBook = async (title) => {

        const response = await axios.post('http://localhost:3001/books', {
            title,
        })
        const updatedBooks = [...books, response.data]

        setBooks(updatedBooks)
    }
    const editBookById = async (id, newtitle) => {
        const responce = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newtitle
        })
        console.log(responce)
        const updatedBooks = books.map(book => {
            if (book.id === id) {
                return { ...book, ...responce.data }
            }
            return book
        })
        setBooks(updatedBooks);
    }
    const valueToShare = {
        books,
        createBook,
        fetchBooks,
        deleteBookById,
        editBookById
    }
    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}
export default BooksContext
export {Provider}