## Converting HTML to JSX
- All props names follow camelCase => autoFocus
- Number attributes have curly braces => maxLength={10}
- boolean 'true' can be written with property name unless 'false' has to be in curly brace => autoFocus spellCheck={false}
- class attribute is written as className for CSS => className="item"
- in-line styles are provided as objects  => style ={{textDecoration:'none',padding:'10px'}}

e.g.
```
 return <input autoFocus spellCheck={false} maxLength={10} className="item" style ={{textDecoration:'none',padding:'10px'}}/>
```

### Extracting Components
- create a new file (File name should be capital letter)
- make your component.Should be a function that return JSX
- Export the component at the bottom of the file
- import the component into another file
- use the component 