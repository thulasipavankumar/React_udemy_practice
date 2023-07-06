import BookShow from "./BookShow"
const BookList = ({ books ,onDelete,onEdit}) => {
    const displayBooks = () => {
        return books.map((eachBook) => {
            return (<BookShow book={eachBook} key={eachBook.id} className="book-show" onDelete={onDelete} onEdit={onEdit}></BookShow>)
        })
    }
    return (
        <div className="book-list">{displayBooks()}</div>
    )
}
export default BookList