import React from 'react';
import './Item.css'

const Item = (props) => {
    console.log(props)
    const {name, price, picture} = props.info;
    return (
        <div className='cart'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <button>Select</button>
            
        </div>
    );
};

export default Item;