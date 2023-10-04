import { useState } from "react"
const BookCreate = ({ onCreate }) => {
    const [title, setTitle] = useState('');
    const handleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('') //empty out the text field ,once the user submit 
    }
    return (
        <div className="book-create">
            <h3>Add a book</h3>
            <form onSubmit={handleSubmit}>
                <label> Title</label>
                <input value={title} onChange={handleChange} className="input"></input>
                <button className="button">Create!</button>
            </form></div>
    )
}
export default BookCreate