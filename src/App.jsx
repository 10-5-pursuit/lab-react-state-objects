// App.jsx
import React, { useState } from "react";
import menuItems from "./data.js";
import Footer from "./Footer";
import Header from "./Header";
import CurrentOrder from "./CurrentOrder";
import Menu from "./Menu";

function App() {
  const [currentOrder, setCurrentOrder] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const addToOrder = (item) => {
    const existingItem = currentOrder.find((orderItem) => orderItem.id === item.id);
    if (existingItem) {
      const updatedOrder = currentOrder.map((orderItem) => {
        if (orderItem.id === item.id) {
          return { ...orderItem, quantity: orderItem.quantity + 1 };
        }
        return orderItem;
      });
      setCurrentOrder(updatedOrder);
    } else {
      setCurrentOrder([...currentOrder, { ...item, quantity: 1 }]);
    }
    setTotalCost(totalCost + item.price);
  };

  const removeFromOrder = (itemId) => {
    const removedItem = currentOrder.find((item) => item.id === itemId);
    const updatedOrder = currentOrder.filter((item) => item.id !== itemId);
    setCurrentOrder(updatedOrder);
    setTotalCost(totalCost - removedItem.price * removedItem.quantity);
  };

  const decreaseQuantity = (itemId) => {
    const updatedOrder = currentOrder.map(item => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCurrentOrder(updatedOrder);
    const removedItem = currentOrder.find((item) => item.id === itemId);
    setTotalCost(totalCost - removedItem.price);
  };

  const increaseQuantity = (itemId) => {
    const updatedOrder = currentOrder.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCurrentOrder(updatedOrder);
    const addedItem = currentOrder.find((item) => item.id === itemId);
    setTotalCost(totalCost + addedItem.price);
  };

  const closeOrder = () => {
    setCurrentOrder([]);
    setTotalCost(0);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Menu menuItems={menuItems} addToOrder={addToOrder} />
        <CurrentOrder
          currentOrder={currentOrder}
          removeFromOrder={removeFromOrder}
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
          totalCost={totalCost}
        />
      </main>
      <Footer closeOrder={closeOrder} />
    </div>
  );
}

export default App;
