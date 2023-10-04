import BookShow from "./BookShow"
import useBooksContext from "../hooks/use-books-contexts"

const BookList = () => {
    const {books} = useBooksContext()
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