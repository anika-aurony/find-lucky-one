import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const carts = props.carts;
    const {handleToChoose, handleToChooseAgain} = props;
    return (
        <div>
            <h3>Selected Toys</h3>
                {
                    carts.map(cart =><ul>{cart}</ul>)
                }
                <button onClick={()=>handleToChoose(carts)} className='btn'>Choose 1 for me</button>
                <br />
                <button onClick={()=>handleToChooseAgain(carts)} className='btn'> Choose Again</button>
                <h3>Your Toy</h3>
                
                <h1 className='result'>{props.result }</h1>
            
        </div>
    );
};

export default Cart;