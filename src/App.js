import React from "react"
import 'bulma/css/bulma.css'
import Header from "./Header"
import Footer from "./Footer"
import { useState } from "react"
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

    return (
        <div>
        
        <Header />
 
        <button  onClick={handleClick}>Add animal</button>
        <div>Count is {animals}</div>
        <Footer />
    </div>
    )
}
export default App