import React from "react";
import { useState } from "react";
import menuItems from "./data";



function Menu ({addItem}){
    const menuElements = menuItems.map((item, idx)=>{

        let spicy = '🌶️'.repeat(item.spiceLevel)
        
        return(
            <div onClick={()=>addItem(item)} key={idx} className="item-name">
                <span>{item.image}</span>
                <div className="item_description">
                    <span>{item.name}</span> <br></br>
                    <span>{spicy}</span>
                </div>
                <span>${item.price}</span>
            </div>
        )
    })

    return(
        <div className="menu_container">
            {menuElements}  
        </div>
    )
}

export default Menu;