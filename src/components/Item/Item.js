import React from 'react';
import './Item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Item = (props) => {
    const {handleAddtoCart}=props
    const {name, price, picture, id} = props.info;
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <button onClick={()=>handleAddtoCart(name, id)} className='btn2'>
                <p>Add to cart  </p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>    
            </button>
            
        </div>
    );
};

export default Item;