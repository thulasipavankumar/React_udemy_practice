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
 - when state is updated => Rerender the component it is defined in + all the child components as well 

### modifying object properties for the state
```javascript
 const [fruit, setFruit] = useState({
  color: 'red',
  name: 'apple',
});

// good trick to update just one property in an object
const changeColor = (newColor) => {
  const updatedFruit = {
    ...fruit,
    color: newColor,
  };

  setFruit(updatedFruit);
};
```

### Handle inputs in React
 - create a new piece of state

### Best Practises
 - Sibiling components **should not directly communicate**
 - To share information b/w siblings,involve parent 


### keys in React

### context 

###  form tag - for capturing submit/enter events
- form tag will call POST onSubmit to prevent it use event.preventDefault();

### useEffect 
- syntaxt is useEffect(function,[counter])
Bellow are some example for the useEffect
```js
useEffect(()=>{
  callApi()
},[])   //  called after 1st render and never call again
```
```js
useEffect(()=>{
  callApi()
})   //  called after 1st render and called after every rerender
```
```js
useEffect(()=>{
  callApi()
},[counter])   //  called after 1st render and called after  rerender if counter vairable is changes
```

### useContext
- useContext is a React Hook that lets you read and subscribe to context from your component.
```js
const value = useContext(SomeContext)
```


Note :

- Application state and Component state (google and find out)