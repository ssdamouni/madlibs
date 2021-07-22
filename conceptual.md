### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is a open source front-end JavaScript library. It is set up so that built components are easily reuseable. In addition, it allows developers to set up pages that don't completely reload when the data changes. 

- What is Babel?
    Babel is a toolchain that converts JavaScript code into backwards compatible code that can work across all browsers.

- What is JSX?
    JSX is a syntax that allows HTML to be written right into JavaScript code.

- How is a Component created in React? 
    By creating a function that returns HTML code wrapped in div. 

- What are some difference between state and props?
    State is refers values that are held by an app at a high level and can usually be altered by the user. The value persists between partial re-renders. Props are essentially just values passed down to lower parts of an app that effect how that component renders. 

- What does "downward data flow" refer to in React?
    It is referring to the unidirectional data flow in React. Data can be passed down to child components but there is no way for that data to move back up the tree. Generally the state is held at the highest level it is useful and it is passed down as props tot he lower components. 

- What is a controlled component?
    A controlled conponent is usually used in React forms so there is one true source for all the form inputs. Any change in the form even before the submit automatically updates and state with what is in the form.

- What is an uncontrolled component?
    This the less reccomended alternative to controlled component. This simply lets the DOM keep track of state using the state already built into the browser for forms. Then you can use a useRef to collect the form data you need. it makes things like sumbiting files a little easier. 

- What is the purpose of the `key` prop when rendering a list of components?
    The help React track which items are changing. 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    Ideally the key is a unique and stable identifier. So, it shouldnt change if parts of the array are removed. So array indexes are usually used as a last resort for key.

- Describe useEffect.  What use cases is it used for in React components?
    UseEffect is used for functions that have side effects. An example is making an axios request, or manually chaning the DOM.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    useRef is a hook that saves value across rerenders and changing it does not cause a rerender. It has a special property of current that can be changed and updated.

- When would you use a ref? When wouldn't you use one?
    A common example fo a useRef is to make a time function that you don't want to keep restarting every time the page re-renders. Do not use this for something that you would like the page to re-render for when it changes.  

- What is a custom hook in React? When would you want to write one?
    Custom hooks generic are examples of useState that can be used across multiple parts of an app. The are most useful for refactoring coding. A common example is where the state boolean that needs to toggle between true and false.