import React from 'react';
import './Item.css'

const Item = (props) => {
    console.log(props)
    const {handleAddtoCart}=props
    const {name, price, picture} = props.info;
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <button onClick={()=>handleAddtoCart(name)}>Add to cart</button>
            
        </div>
    );
};

export default Item;