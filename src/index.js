// import react and ReactDOm libraries
import React  from "react";
import  ReactDom  from "react-dom/client";
import App from "./App";
//searchImages();
// get a reference to the div with id root
const el = document.getElementById('root');
// tell react to take control of that element
const root = ReactDom.createRoot(el);

//create a component

//show the component on the screen
root.render(<><App /></>);


