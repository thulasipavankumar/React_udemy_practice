// import react and ReactDOm libraries
import React  from "react";
import  ReactDom  from "react-dom/client";
import App from "./App";
// get a reference to the div with id root
const el = document.getElementById('root');
// tell react to take control of that element
const root = ReactDom.createRoot(el);
//const root = createRoot(el);
//create a component
function Practise(){
    let message = 'Hello there!';
    if(Math.random()<0.5){
        message = 'general kenobi'
    }
    let ageType = 'number'
    const minAge = 0
    // shorthand jsx
    return <div>
        <h2>{message}</h2>
        <input type={ageType} min={minAge}/>
        <p>time is {new Date().toLocaleTimeString()}</p>
        <input autoFocus spellCheck={false} maxLength={10} className="item" style ={{textDecoration:'none',padding:'20px'}}/>
        </div>
}
function Merge(){
    return <div><App /><Practise /></div>
}
//show the component on the screen
root.render(<Merge/>);


