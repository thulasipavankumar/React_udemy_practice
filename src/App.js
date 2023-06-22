import React from "react"
import SearchBar from "./components/SearchBar"
import searchImages from "./api"
import { useState } from "react"
import ImageList from "./components/ImageList"
const App = ()=>{
    const [images,setImages] = useState([]);
    const handleSubmit = async (queryString) => {
        const  result = await searchImages(queryString)
        setImages(result)
    }
    return (
        <div >
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList images={images}></ImageList>
        </div>    
    )
}

export default App