import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the new method for React 18
import './index.css';
import Madlib from './Madlib';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root for rendering
root.render(
    <React.StrictMode>
        <Madlib />
    </React.StrictMode>
);
