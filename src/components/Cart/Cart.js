import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveItem }) => {
    let message;
    if(cart.length === 0){
        message = <p>Please buy at least one item !!!</p>
    }
    else if(cart.length === 1){
        message = <div>
            <h5>Amar jonno akta nao</h5>
            <p>Tumar jonno akta nao</p>
            <p><small>Amar jonno arekta nao, Please</small></p>
        </div>
    }
    else{
        message = <p>Thanks for buying !!!</p>
    }


    return (
        <div>
            <h2 className={cart.length ===2 ? 'orange':'purple'}>Order summary</h2>
            <h5 className={`bold ${cart.length===2 ? 'blue': 'yellow'}`}>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p key={tshirt._id}>

                    {tshirt.name}
                    <button onClick={ () => handleRemoveItem(tshirt)}>X</button>
                    </p>)
            }

            {  message }

            { cart.length === 3 ? <p>3 jonke ki gift diba?</p>:<p>Kino Kino</p> }
            <p>------and operator------</p>
            {cart.length === 2 && <h3>Double Items</h3>}
            <p>------or operator------</p>
            {cart.length === 4 || <h3>four item nay</h3>}
        </div>
    );
};

export default Cart;

/* 
conditional rendering
1. use element on a variable and then use if-else to set value
2. ternary operator condition ? true : false
3. && operator (if condition is true , i want to display something)
4. || operator (if condition is false , i want to display something)
*/