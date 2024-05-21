import React, { useContext } from 'react';
import { Shopcontext } from '../context/shop-context';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addTocart,cartItem } = useContext(Shopcontext);

  const cartItemamount = cartItem[id]

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price.toFixed(2)}</p>
        <button className="addToCartBttn" onClick={() => addTocart(id)}>
          Add to Cart   {cartItemamount > 0 &&  <>({cartItemamount}) </>}
        </button>
      </div>
    </div>
  );
};
