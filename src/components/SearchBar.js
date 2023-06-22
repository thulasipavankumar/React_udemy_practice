import { useState } from "react";
import "./SearchBar.css"
const SearchBar = ({onSubmit}) => {
    const [queryString,setQueryString]=useState('');
    const handleFormSubmit = (event) => {
       // console.log(`while submiting the data was ${event.target.value}`)
        event.preventDefault();
        onSubmit(queryString);
    }
    const handleChange = (event) => {
        setQueryString(event.target.value);
    }
    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
            <input value={queryString} maxLength={10} onChange={handleChange}></input>
            </form>
        </div>
    )

}
export default SearchBar