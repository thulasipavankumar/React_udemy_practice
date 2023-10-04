import { useState } from "react"
import BookEdit from "./BookEdit"

const BookShow = ({book,onDelete,onEdit}) => {
    const [showEdit,setEdit]=useState(false)
    const handleDeleteClick = () => {
        onDelete(book.id)
    }
    
    const editBook = () => {
        setEdit(!showEdit);
    }
    const handleSubmit = (id,newTitle) =>{
        setEdit(false); // after editing and pressing enter , the bookedit component should not be shown any more
        onEdit(id,newTitle)
    }
    let content = book.title
    if(showEdit){
        content=<BookEdit book={book} onEdit={handleSubmit}></BookEdit>
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