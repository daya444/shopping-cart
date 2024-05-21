import React from 'react';
import { PRODUCTS } from '../product';
import { Product } from '../components/Product';
import '../pages/shop.css';
import {useNavigate} from 'react-router-dom'

export const Homepage = () => {

  let Navigate = useNavigate()
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Daya Shopping Cart</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
      <div className='checkout'>
        <button onClick={() => Navigate('/cart')} style = {{textAlign:'center'}} > Go to cart</button>
      </div>

    </div>
  );
};
