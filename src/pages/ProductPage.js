import React, { useContext, useState } from 'react'
import { itemDetailsContext } from '../ItemDetailsContext'
import products from './data'

export default function ProductPage() {
  const { itemDetails } = useContext(itemDetailsContext)
  const [stateItemDetails, setStateItemDetails] = itemDetails
  const [itemCount, setItemCount] = useState(1)

  // const addItemsToCart = () => {
  //   products.map(product => 
  //     setStateItemDetails(prev => [...prev, {
  //       ...product,
  //       "itemCount": itemCount
  //     }])
  //   )
  // }

    // TBU
    const addItemsToCart = () => {
      if(stateItemDetails.length > 0) {
        products.map(product => {
          stateItemDetails.some(item => {
            if(item.productId === product.productId) {
              let currentCount = item.itemCount
              let totalCount = currentCount + itemCount
              setStateItemDetails(current => current.filter(prev => prev.productId !== item.productId));
              setStateItemDetails(prev => [...prev, {...product,"itemCount": totalCount}])
            } else {
              setStateItemDetails(prev => [...prev, {...product,"itemCount": itemCount}])
            }
          })
        })
      } else {
        products.map(product => 
          setStateItemDetails(prev => [...prev, {...product, "itemCount": itemCount}])
        )
      }
    }



  const addCount = () => {
      setItemCount(prev => prev + 1)
  }

  const subtractCount = () => {
    if(itemCount >= 2) {
      setItemCount(prev => prev - 1)
    }
  }


  return (

    
    <section className='container'>
      <div className='product-display'>
        <img className='product-image-active' src='./images/image-product-1.jpg'/>
        <div className='product-alt-view'>
          <div className='product-alt-view-wrapper selected-alt'>
            <img className='product-alt-view-image' src='./images/image-product-1-thumbnail.jpg'/>
          </div>
          <div className='product-alt-view-wrapper'>
            <img className='product-alt-view-image' src='./images/image-product-2-thumbnail.jpg'/>
          </div>
          <div className='product-alt-view-wrapper'>
            <img className='product-alt-view-image' src='./images/image-product-3-thumbnail.jpg'/>
          </div>
          <div className='product-alt-view-wrapper'>
            <img className='product-alt-view-image' src='./images/image-product-4-thumbnail.jpg'/>
          </div>
          
        </div>
      </div>













      {products.map(product => 
      <div className='product-details' key={product.productId}>
        <h3 className='company-name'>{product.productMaker}</h3>
        <h2 className='product-name'>{product.productName}</h2>
        <p className='product-description'>{product.productDescription}</p>
        <div className='product-price-info'>
          <h4 className='product-price-discounted'>{((product.productPrice*product.productDiscount)).toFixed(2)} <span className='product-discount'>{product.productDiscount*100}%</span></h4>
          <h4 className='product-price'>${(product.productPrice).toFixed(2)}</h4>
        </div>
        
        <div className='product-counter'>
          <div className='counter'>
            <img onClick={subtractCount} style={{opacity: itemCount === 0 ? '.5': '1'}} className='counter-minus' src='./images/icon-minus.svg'/>
            {parseInt(itemCount)}
            <img onClick={addCount} className='counter-plus' src='./images/icon-plus.svg'/>
          </div>
          <button onClick={addItemsToCart} className='add-to-cart-btn'><svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fillRule="nonzero"/></svg>Add to cart</button>
        </div>
      </div>
      )}
    </section>
  )
}
