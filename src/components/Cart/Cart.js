import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

     let total = 0;
     for (let i = 0; i < cart.length; i++) {
         const course = cart[i];
         total = total + course.price;
         
     }
     const totalPrice = Number(total).toFixed(2);
    return (
        <div>
            <h3>Order Summary</h3>
             <p>Items Ordered: {cart.length}</p>
              <p>Total Price: {totalPrice}</p>
        </div>
    );
};

export default Cart;