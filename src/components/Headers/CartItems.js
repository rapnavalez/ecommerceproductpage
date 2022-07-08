import React, { useState, useContext, useEffect } from 'react'
import { itemDetailsContext } from '../../ItemDetailsContext';

export default function CartItems() {

    const {itemDetails} = useContext(itemDetailsContext);
    const [stateItemDetails, setStateItemDetails] = itemDetails


    const deleteCartItem = (e) => {
        const targetKey = e.target.name
            setStateItemDetails(current =>
            current.filter(item => {
                return item.productId !== targetKey;
            }),
        );
    };

    useEffect(() => {
        setStateItemDetails(prev => prev)

    }, [stateItemDetails]);



  return (
    <div className='item-details'>
        {stateItemDetails.map(item => 

            <div className='item-details-wrapper' key={item.productId}>
                <img className='item-thumbnail' src={item.productThumbnail} alt="shoes-img"/>
                <div className='item-name-amount-total'>
                    <h4 className='item-name'>{item.productName}</h4>
                    <span className='amount-count-total'>${(item.productPrice*item.productDiscount).toFixed(2)} x {item.itemCount} <strong>${((item.productPrice*item.productDiscount)*(item.itemCount)).toFixed(2)}</strong></span>
                </div>
                <img onClick={deleteCartItem} name={item.productId} className='delete-icon' src='./images/icon-delete.svg' alt="delete-icon"/>
            </div>

        )}

        <a href='/' className='checkout'>Checkout</a>
    </div>
  )
}
