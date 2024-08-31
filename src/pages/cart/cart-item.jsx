import React, { useContext } from 'react'
import { Shopcontext } from '../../context/shop-context';

export const Cartitem = (props) => {
  const {cartItem,addTocart,removeTocart,updatecartitemcount } = useContext(Shopcontext);

    const {id, productName, price, productImage } = props.data;
  return (
    <div className='cartItem'>
        <img src={productImage} alt={productName}/>
                <div className="description">
                    <p>
                        <b>{productName}</b>
                    </p>
                    <p> ${price}</p>
                    <div className='countHandler'>

                      <button onClick={() => {removeTocart(id)}}>-</button>
                      <input value ={cartItem[id]} onChange ={(e) => updatecartitemcount (Number(e.target.value),id)}/>
                      <button onClick={() => {addTocart(id)}}>+</button>
                    </div>
                  
            </div>  

       
            

    </div>
    
  )
}
