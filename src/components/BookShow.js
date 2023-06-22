import { useState } from "react"
const BookShow = ({book,onDelete}) => {
    const [showEdit,setEdit]=useState(false)
    const handleDeleteClick = () => {
        onDelete(book.id)
    }
    const editBook = () => {

    }
    return (
        <div className="book-show">
            {book.id} 
            <h3>title: {book.title}</h3>
            <div className="actions">
                <button className="delete" onClick={handleDeleteClick}></button>
            </div>
            <div>delete</div>
        </div>
    )
}
export default BookShow