# React_udemy_practice
A project to explore the leraning in React from Udemy cource

### Converting HTML to JSX
 - All props names follow camelCase => autoFocus
 - Number attributes have curly braces => maxLength={10}
 - boolean 'true' can be written with property name unless 'false' has to be in curly brace => autoFocus spellCheck={false}
 - class attribute is written as className for CSS => className="item"
 - in-line styles are provided as objects  => style ={{textDecoration:'none',padding:'10px'}}

e.g.
```javascript
 return <input autoFocus spellCheck={false} maxLength={10} className="item" style ={{textDecoration:'none',padding:'10px'}}/>
```

### Examples of JSX
`https://jsx-notes.vercel.app/`

###  Components usage
 - create a new file (File name should be capital letter)
 - make your component.Should be a function that return JSX
 - Export the component at the bottom of the file
 - import the component into another file
 - use the component 


### Props system
 - used to pass data from parent component to child component 
 - One way flow of data.Child can't push the data to parent

### Communication with Props
 - Add attributes to a JSX element
 - react collects the attributes and puts them in an object
 - props object shows up as the first argument to the child component function
 - we can use the props however we wish 

  ### [bulma](https://bulma.io/documentation/components/) css for styling 

 ### css styling
  - . (dot) means all the elments with that class name 

### Event  
`(google and add the info here)`
 - Event is a action we are looking for from the user e.g.  button click,element drag

 ### State
`(google and add the info here)`
 - state system is to update content after the event e.g. update the count of items in cart
 - date that changes as the user interacts with our app
 - when this data changes , react will update content on the screen automatically


