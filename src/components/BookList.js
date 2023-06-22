import BookShow from "./BookShow"
const BookList = ({ books ,onDelete}) => {
    const displayBooks = () => {
        return books.map((eachBook) => {
            return (<BookShow book={eachBook} key={eachBook.id} className="book-show" onDelete={onDelete}></BookShow>)
        })
    }
    return (
        <div className="book-list">{displayBooks()}</div>
    )
}
export default BookList