import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Oders = () => {

    const {products, previousCart} = useLoaderData();
    const [cart, setCart] = useState(previousCart);

    // claer cart
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }


    // console.log(cart);

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);

    }


    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <ReviewItem 
                        key={product.id}
                        product = {product}
                        handleRemoveItem = {handleRemoveItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>No items for Review. Please <Link to="/">Shope more.</Link></h2>
                }
            </div>
           <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}> </Cart>
           </div>
        </div>
    );
};

export default Oders;