import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
//import React, { useState } from 'react';
import './Product.css'

const Product = (props) => {
    //console.log('from product.js : ', props.product)
    const {handleAddToCart, product} = props;
    const { name, img, seller, price, rating } =  product;
    //const [] = useState
    
    return (
        <div className='product'>
            <img src={img} alt="product-img" />
            <div className='Product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Rating: {rating} stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='button-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;