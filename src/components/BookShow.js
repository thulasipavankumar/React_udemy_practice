import { useState } from "react"
import BookEdit from "./BookEdit"
const BookShow = ({book,onDelete,onEdit}) => {
    const [showEdit,setEdit]=useState(false)
    const handleDeleteClick = () => {
        onDelete(book.id)
    }
    let content = <h3>{book.title}</h3>
    if(showEdit){
        content=<BookEdit book={book} onEdit={onEdit}></BookEdit>
    }
    const editBook = () => {
        setEdit(!showEdit);
    }
    return (
        <div className="book-show">
            {book.id} 
            <h3>title: {content}</h3>
            <div className="actions">
                <button className="delete" onClick={handleDeleteClick}></button>
                <button className="edit" onClick={editBook}></button>
            </div>
        </div>
    )
}
export default BookShow