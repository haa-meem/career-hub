import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog'>
            <h1 className='blog_title'>Q & A</h1>
            <div>
                <h2>When should you use Context API?</h2>
                <p>The Context API in React is used for sharing data between components without having to pass the data through multiple levels of props. It is typically used for storing data that is needed by many components throughout your application, such as theme or style information, authentication data, localization data, and user preferences or settings. However, it's important to use context judiciously and not to overuse it, as it can make your code more difficult to maintain if used excessively.</p>
            </div>
            <div>
                <h2>What is Custom Hook?</h2>
                <p>A custom hook is a JavaScript function that uses built-in hooks to provide some reusable behavior or functionality that can be shared between components. Custom hooks allow you to extract and reuse logic that might otherwise be duplicated in multiple components. They can be used to simplify your code, make it more reusable, and reduce duplication. Custom hooks help to separate concerns by encapsulating specific behavior into separate functions.</p>
            </div>
            <div>
                <h2>What is useRef?How does it work?</h2>
                <p>useRef is a hook in React that allows you to create a mutable reference that can be attached to a DOM element or any other value. The reference persists across re-renders and can be updated without triggering a re-render. The useRef hook returns a mutable ref object with a .current property that can be used to store a reference to a DOM node, a component instance, or any other value. It's useful for storing values that need to be accessed by multiple components or for accessing the DOM directly without using props or state. However, it should not be used for managing state, which should be done using the useState hook instead.</p>
            </div>
            <div>
                <h2>What is useMemo?How does it work?</h2>
                <p>useMemo is a hook in React that is used to optimize the performance of your app by memoizing expensive function computations so that they are only re-run when necessary. The hook takes a function that returns a value and an array of dependencies, and only re-computes the result if one of the dependencies has changed. Memoization should be used judiciously and only when necessary to optimize your app's performance, as it does not always provide a performance improvement and can actually have a negative impact on performance if the computation is not expensive enough or if the dependencies change too frequently.</p>
            </div>
        </div>
    );
};

export default Blog;