import React, { createContext, useState } from "react";

export const itemDetailsContext = createContext()

export const ItemDetailsProvider = props => {

    const [itemDetails, setItemDetails] = useState([
        // {
        //     productId: "121",
        //     productName: "Fall Limited Edition Sneakers",
        //     productThumbnail: "./images/image-product-1-thumbnail.jpg", 
        //     productMaker: "Sneaker Company",
        //     productDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore soluta vitae accusamus, laudantium quaerat, tempora natus sint corrupti harum unde fugiat ad inventore nisi aliquid alias obcaecati quo magnam quod.",
        //     productPrice: 250,
        //     productDiscount: .50,
        //     productStock: 10,
        //     itemCount: 2,
        // }
    ])


    return (

        <itemDetailsContext.Provider value={{
            itemDetails: [itemDetails, setItemDetails]
        }}>
            {props.children}
        </itemDetailsContext.Provider>
    )
}