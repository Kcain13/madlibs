### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is a JavaScript library for buiding user interfaces. You would primarily use then when building web applications. It allows development of reusable UI components, manage the state of an application, and update the UI when the data changes. Overall, its helpful for anything needed thats dynamic, fast, and scalable from a frontend perspective thats going to handle complex interactions, especially in a SPA.

- What is Babel?
    In reference to React; Babel supports JSX, a syntax used in React for writing HTML-like code inside JavaScript. Babel can do this because it is a compiler that allows JavasScript features that might not be supported by all browsers to be converted into a backwards-compatible version. 

- What is JSX?
    A syntax used to for writing HTML-like code inside JavaScript. 

- How is a Component created in React?
    The preferred method in creating a Component is through a Function but it can also be done as a Class. The class method route is an extension of React.Component and requires a render() method. Function Components are prefered for its simplicity and performance benefits.

- What are some difference between state and props?
    State is managed within the component and represents data that can change over time. It's mutable and can be updated using setState or the useState hook. 
    Props "properties" are passed to components from their parent components. They are read-only and cannot be modified by the component reciving them. This is used for passing data and event handlers from a parent to a child component to allow customization and communication. Props are owned by the parent.

- What does "downward data flow" refer to in React?
    The parent controls the data and passes it down to child props. The child prop can only receive it, not change it directly. This unidirectional flow ensures predictable data management. 

- What is a controlled component?
    React manages the forms elements value via state. The component is updated and re-rendered on every change. This is good for validation, conditionally modifying inputs, or complex form logic.

- What is an uncontrolled component?
    The DOM maintains the inputs values. React uses refs to get the value only when needed such as form submission. This is simpler for basic forms or when you don't need to continuously track input changes.

- What is the purpose of the `key` prop when rendering a list of components?
    The key prop helps React identify which items in a list have changed, been added, or been removed (CRUD). This allows for optimizing the process of re-rending only components that need to be updated. 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    To avoid bugs and performance issues it's best to use a unique identifier such as an `id` not something that will be easily changed.

- Describe useEffect.  What use cases is it used for in React components?
    This is a React Hook that allows you to fetch data from an API, subscribe to external data sources, or manually update the DOM. A key feature is the Dependecy Array. The effect runs after the render, and it can be run conditionally based on the values in the dependency array.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    useRef is useful for accessing DOM elements and storing mutable values without causing re-renders, making it a versatile tool for various scenarios in React applications.

- When would you use a ref? When wouldn't you use one?
    You would use a ref on an application that needs a timer for instance. The timer will not affect the rendering, so the component remains unchanged even though the timer id updates. This wouldn't be used for initial Render Values, State Management, or Validation or Conditional Logic

- What is a custom hook in React? When would you want to write one?
    By convention, custom hooks start with `use`. It is a function that uses other hooks like (useState, useEffect, etc.) Write custom hooks when you have logic that needs to be used in multiple components, such as handling form inputs, managing state. Write these if you're looking to improve code organization, encapsulating complex logic, and improve testability.