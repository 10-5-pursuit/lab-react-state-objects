// CurrentOrder.jsx
import React from "react";

function CurrentOrder({ currentOrder, removeFromOrder, decreaseQuantity, increaseQuantity, totalCost }) {
  return (
    <div className="current-order">
      <h2>Current Order</h2>
      <ul>
        {currentOrder.map((item) => (
          <li key={item.id}>
            <div className="order-item">
              <button className="remove-item" onClick={() => removeFromOrder(item.id)}>❌</button>
              <span>{item.name} - ${item.price} - Quantity: {item.quantity}</span>
              <button className="quantity-btn" onClick={() => decreaseQuantity(item.id)}>-</button>
              <button className="quantity-btn" onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <h4>Total: ${totalCost}</h4>
      <div>
        <button className="order-btn" onClick={() => alert("Tidy Order functionality to be implemented")}>Tidy Order</button>
        <button className="order-btn" onClick={() => alert("Close Order functionality to be implemented")}>Close Order</button>
      </div>
    </div>
  );
}

export default CurrentOrder;
