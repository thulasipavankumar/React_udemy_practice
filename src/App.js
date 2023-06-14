import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { useState } from "react"
import AnimalShow from "./AnimalShow"
import  "./App.css"
const getRandomAnimal =  () => {
    const animals = ['bison','cow','dog','cat','horse']
    return animals[Math.floor(Math.random()*animals.length)]
}
const App = ()=>{
    const [animals,setAnimals] = useState([]);
    const handleClick = (args) => {
       // setAnimals(animals.concat(getRandomAnimal()));  => don't modify the piece of state
       setAnimals([...animals,getRandomAnimal()]);
    }
const renderedAnimals = animals.map((animal,index)=>{
    return <AnimalShow type={animal} key={index}  />
})
    return (
        <div>
             <Header />
        <div className="app">
        <button  onClick={handleClick}>Add animal</button> 
        <div className="animal-list">{renderedAnimals}</div>
    </div>
    
    <Footer />
        </div>
       
    )
}
export default App