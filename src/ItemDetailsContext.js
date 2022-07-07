import React, { createContext, useState } from "react";

export const itemDetailsContext = createContext()

export const ItemDetailsProvider = props => {

    const [itemDetails, setItemDetails] = useState([
        {
            itemName: 'Fall Limited Edition Sneakers',
            itemPrice: 125,
            itemThumbnail: 'image-product-1-thumbnail.jpg',
            itemCount: 3
        }
    ])

    const [isCartEmpty, setIsCartEmpty] = useState(false)

    return (

        <itemDetailsContext.Provider value={{
            itemDetails: [itemDetails, setItemDetails],
            cartStatus: [isCartEmpty, setIsCartEmpty]
        }}>
            {props.children}
        </itemDetailsContext.Provider>
    )
}