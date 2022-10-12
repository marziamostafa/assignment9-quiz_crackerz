import React from 'react';
import Header from '../Header/Header';
import './Blog.css'

const Blog = () => {
    return (
        <div className='react-qst pb-5 m-2'>

            <h2 className='text-4xl font-bold'>Blog</h2>
            <div>
                <h3 className='text-2xl font-semibold py-3'>What is the purpose of react router?</h3>
                <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>
            </div>
            <div>
                <h3 className='text-2xl font-semibold py-3'>How does context API works?</h3>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                    Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.</p>
            </div>
            <div>
                <h3 className='text-2xl font-semibold py-3'>Explain useRef?</h3>
                <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>

        </div>
    );
};

export default Blog;