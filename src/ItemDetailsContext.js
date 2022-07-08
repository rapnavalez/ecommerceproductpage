import React, { createContext, useState, useEffect } from "react";

export const itemDetailsContext = createContext()

export const ItemDetailsProvider = props => {

    const [itemDetails, setItemDetails] = useState([])
    const [closeLightBox, setCloseLightBox] = useState(true)
    const [activeImage, setActiveImage] = useState('./images/image-product-1.jpg')

    const openLightboxOnMobile = () => {
        if(window.innerWidth <= 768) {
            setCloseLightBox(false)
        } else {
            setCloseLightBox(true)
        }
    }

    useEffect(() => {
        openLightboxOnMobile()
        window.addEventListener('resize', openLightboxOnMobile)
        return () => {
            window.removeEventListener('resize', openLightboxOnMobile)
        };
    }, []);
    return (

        <itemDetailsContext.Provider value={{
            itemDetails: [itemDetails, setItemDetails],
            closeLightbox: [closeLightBox, setCloseLightBox],
            activeImage: [activeImage, setActiveImage]
        }}>
            {props.children}
        </itemDetailsContext.Provider>
    )
}