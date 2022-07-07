import React, { useState, useContext } from 'react'
import { itemDetailsContext } from '../../ItemDetailsContext';

export default function Header() {
    const {itemDetails, cartStatus} = useContext(itemDetailsContext);
    const [stateItemDetails, setStateItemDetails] = itemDetails[0]
    const [stateCartStatus, setStateCartStatus] = cartStatus


    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [preview, setPreview] = useState(false)


  return (
    <header>
        <img className='burger' src={`./images/${isMenuOpen ? 'icon-close' : 'icon-menu'}.svg`} onClick={()=>setIsMenuOpen(prev => !prev)} />
        <h1 className='logo'>sneakers</h1>
        <nav className={`nav ${isMenuOpen && 'menu-open'}`}>
            <ul className='menu'>
                <li className='menu-item'><a href='/'>Collections</a></li>
                <li className='menu-item'><a href='/'>Men</a></li>
                <li className='menu-item'><a href='/'>Women</a></li>
                <li className='menu-item'><a href='/'>About</a></li>
                <li className='menu-item'><a href='/'>Contact</a></li>
            </ul>
        </nav>
        <div className='header-rightside'>
            <div className='cart-icon' onClick={()=>setPreview(prev => !prev)}>
                <svg width="22" className={`icon ${preview && 'icon-active'}`} height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fillRule="nonzero"/></svg>
                <span className='cart-item-count'>{stateItemDetails.itemCount}</span>
            </div>
            <div className={`cart-preview ${preview && 'cart-preview-open'}`}>
                <h2 className='cart-preview-name'>Cart</h2>
                <div className='line'></div>
                <div className='cart-preview-content'>{
                    stateCartStatus ? 
                    <h3 className='cart-empty'>Your cart is empty.</h3> : 
                    <div className='item-details'>
                        <div className='item-details-wrapper'>
                            <img className='item-thumbnail' src={`./images/${stateItemDetails.itemThumbnail}`} />
                            <div className='item-name-amount-total'>
                                <h4 className='item-name'>{stateItemDetails.itemName}</h4>
                                <span className='amount-count-total'>${stateItemDetails.itemPrice.toFixed(2)} x {stateItemDetails.itemCount} <strong>{(stateItemDetails.itemPrice*stateItemDetails.itemCount).toFixed(2)}</strong></span>
                            </div>
                            <img className='delete-icon' src='./images/icon-delete.svg'/>
                        </div>
                    <a href='/' className='checkout'>Checkout</a>
                    </div>
                }
                </div>
            </div>
            <img className='avatar' src='./images/image-avatar.png' />
        </div>
    </header>
  )
}
