import React, { useContext } from 'react';
import { PRODUCTS } from '../../product';
import { Shopcontext } from '../../context/shop-context';
import { Cartitem } from '../cart/cart-item';
import '../cart/cart.css';
import {useNavigate} from 'react-router-dom'

export const Cart = () => {
  const { gettotalamount,cartItem } = useContext(Shopcontext);
   let Totalamount = gettotalamount()

   let Navigate = useNavigate()
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>

      <div className='cartitems'>
        {PRODUCTS.map((product) => {
          if (cartItem[product.id] !== 0) {
            return <Cartitem key={product.id} data={product} />;
          }
          return null;
        })}
      </div>

      {Totalamount > 0 ?
      <div className='checkout'>
        <p>SubTotal $ { Totalamount}</p>
          <button onClick={() => Navigate('/')}>Continue shopping</button>
          <button >Checkout</button>
      </div>
      : <div className='checkout' >
        <h1>Your Cart is empty</h1>
      <button onClick={() => Navigate('/')}> Start Shopping</button></div>
      }
    </div>
  );
};
