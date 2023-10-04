import { useContext, useState } from "react"
import BookEdit from "./BookEdit"
import BooksContext from "../context/books"

const BookShow = ({book}) => {
    const [showEdit,setEdit]=useState(false)
    const {deleteBookById} = useContext(BooksContext)
    const handleDeleteClick = () => {
        deleteBookById(book.id)
    }
    
    const editBook = () => {
        setEdit(!showEdit);
    }
    const handleSubmit = () =>{
        setEdit(false); // after editing and pressing enter , the bookedit component should not be shown any more
        
    }
    let content = book.title
    if(showEdit){
        content=<BookEdit book={book} onSubmit={handleSubmit}></BookEdit>
    }
    return (
        <div className="book-show">
            {book.id} 
            <h3>title: {content}</h3>
            <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`}></img>
            <div className="actions">
                <button className="delete" onClick={handleDeleteClick}></button>
                <button className="edit" onClick={editBook}></button>
            </div>
        </div>
    )
}
export default BookShow