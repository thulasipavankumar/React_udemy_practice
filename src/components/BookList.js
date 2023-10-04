import { useContext } from "react"
import BooksContext from "../context/books"
import BookShow from "./BookShow"
const BookList = () => {
    const {books} = useContext(BooksContext)
    const renderBooks = () =>  books.map((eachBook) => {
            return (<BookShow book={eachBook} key={eachBook.id} className="book-show" ></BookShow>)
        })
    
    
    return (
        <div className="book-list">
            {renderBooks()}
        </div>
    )
}
export default BookList