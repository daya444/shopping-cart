import React, { createContext, useState } from 'react';

import { PRODUCTS } from '../product';

export const Shopcontext = createContext(null);

const getdefaultcart = () => {
  let cart = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const Shopcontextprovider = (props) => {
  const [cartItem, setCartItem] = useState(getdefaultcart());

  const addTocart = (itemid) => {
    setCartItem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
  };

  const removeTocart = (itemid) => {
    setCartItem((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };

  const updatecartitemcount =(newAmount,itemid)=> {
    setCartItem((prev) => ({...prev , [itemid]  : newAmount}))
  }



  const gettotalamount = () => {
    let Totalamount = 0
    for (const item in cartItem) {
      if (cartItem[item] >0) {
        let iteminfo = PRODUCTS.find((Product)=> Product.id ===Number(item))
        Totalamount += cartItem[item] * iteminfo.price
      }
    }
    return Totalamount
  }



  const contextvalue = {gettotalamount, cartItem, addTocart, removeTocart ,updatecartitemcount};

  console.log("cartitme",cartItem);

  return (
    <Shopcontext.Provider value={contextvalue}>
      {props.children}
    </Shopcontext.Provider>
  );
};
