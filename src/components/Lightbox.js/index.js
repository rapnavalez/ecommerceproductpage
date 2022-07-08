import React, { useContext, useState } from 'react'
import { itemDetailsContext } from '../../ItemDetailsContext'

export default function Lightbox() {

  const [activeLightBoxImage, setActiveLightBoxImage] = useState('./images/image-product-1.jpg')
  const { closeLightbox, activeImage } = useContext(itemDetailsContext)
  const [stateCloseLightBox, setStateCloseLightBox] = closeLightbox
  const [stateActiveImage, setStateActiveImage] = activeImage

  const close = () => {
    setStateCloseLightBox(true)
  }

  const next = () => {
    const length = stateActiveImage.length
    const imgNumber = stateActiveImage.substr(length-5, length)
    const thumbnail = document.querySelectorAll('.product-alt-view-image-lightbox')
    thumbnail.forEach(image=> image.classList.remove('selected-image'))

    switch (imgNumber) {
      case '1.jpg':
        setStateActiveImage('./images/image-product-2.jpg')
        thumbnail[1].classList.add('selected-image')
        break;
      case '2.jpg':
        setStateActiveImage('./images/image-product-3.jpg')
        thumbnail[2].classList.add('selected-image')
        break;
      case '3.jpg':
        setStateActiveImage('./images/image-product-4.jpg')
        thumbnail[3].classList.add('selected-image')
        break;
      case '4.jpg':
        setStateActiveImage('./images/image-product-1.jpg')
        thumbnail[0].classList.add('selected-image')
        break;
      default:
        break;
    }
  }

  const previous = () => {
    const length = stateActiveImage.length
    const imgNumber = stateActiveImage.substr(length-5, length)
    const thumbnail = document.querySelectorAll('.product-alt-view-image-lightbox')
    thumbnail.forEach(image=> image.classList.remove('selected-image'))

    switch (imgNumber) {
      case '1.jpg':
        setStateActiveImage('./images/image-product-4.jpg')
        thumbnail[3].classList.add('selected-image')
        break;
      case '2.jpg':
        setStateActiveImage('./images/image-product-1.jpg')
        thumbnail[0].classList.add('selected-image')
        break;
      case '3.jpg':
        setStateActiveImage('./images/image-product-2.jpg')
        thumbnail[1].classList.add('selected-image')
        break;
      case '4.jpg':
        setStateActiveImage('./images/image-product-3.jpg')
        thumbnail[2].classList.add('selected-image')
        break;
      default:
        break;
    }    
  }

  const changeActiveLightboxImage = (e) => {
    setStateActiveImage(e.target.src)
    document.querySelectorAll('.product-alt-view-image-lightbox').forEach(image=> image.classList.remove('selected-image'))
    e.target.classList.add('selected-image')
  }


  return (
      <div className={`product-display-lightbox ${stateCloseLightBox && 'close-lightbox'}`}>
        <div className='active-lightbox-container'>
          <svg onClick={close} className='lightbox-close-btn' width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#FFF" fillRule="evenodd"/></svg>
          <img onClick={previous} className='previous-btn' src='./images/icon-previous.svg'/>
          <img className='product-image-active-lightbox' src={stateActiveImage}/>
          <img onClick={next}  className='next-btn' src='./images/icon-next.svg'/>
        </div>
      
        <div className='product-alt-view-lightbox'>
            <img onClick={changeActiveLightboxImage} className='product-alt-view-image-lightbox' src='./images/image-product-1.jpg'/>
            <img onClick={changeActiveLightboxImage} className='product-alt-view-image-lightbox' src='./images/image-product-2.jpg'/>
            <img onClick={changeActiveLightboxImage} className='product-alt-view-image-lightbox' src='./images/image-product-3.jpg'/>
            <img onClick={changeActiveLightboxImage} className='product-alt-view-image-lightbox' src='./images/image-product-4.jpg'/>
        </div>
      </div>
  )
}
