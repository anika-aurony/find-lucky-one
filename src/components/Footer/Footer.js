import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
                <h1>How useState works?</h1>
                <p>In React, useState() allow us to show the state changes in UI easily. It allow to have state variables in functional components. </p>
                <strong>const [state, setState] = useState(initialstate)</strong>
                <p>It takes initialstate as the initial value which will be change. It returns array of two entries. One is the current state value and another one is funtion that update the value. Here, state is the current state value and setState is the function. setState work as asynchronous.</p>

                <h1>Props VS state</h1>
        </div>
    );
};

export default Footer;