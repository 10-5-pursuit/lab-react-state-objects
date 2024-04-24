import React from "react";

const CurrentOrder = ({currentOrder, total, delItems}) =>{

    return(
        <div className="current-order-container">
            <h2>Current Order</h2>
            <ul>
                {currentOrder.map((item, idx)=>{
                    return (
                        <li key={idx} className="current_items_container">
                            <p onClick={()=>delItems(idx)}><strong>X</strong></p>
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                        </li>
                    )
                })}
            </ul>
            <h4>Total: ${total}</h4>
            <div>
              <button>Tidy order</button>
              <button>Close order</button>
            </div>
          </div>




        
    )
}
export default CurrentOrder;