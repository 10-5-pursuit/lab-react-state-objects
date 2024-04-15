import React, { useState } from "react";
import data from "./data";
import Footer from "./Footer";
import Header from "./Header";
import PastOrders from "./PastOrders";
import "./App.css";

function App() {
  const [order, setOrder] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const addToOrder = (item) => {
    setOrder((prevOrder) => [...prevOrder, item]);
    setTotalCost((prevTotal) => prevTotal + item.price);
  };

  const removeFromOrder = (itemToRemove) => {
    setOrder((prevOrder) =>
      prevOrder.filter((item) => item.name !== itemToRemove.name)
    );
    setTotalCost((prevTotal) => prevTotal - itemToRemove.price);
  };

  const tidyOrder = () => {
    const tidy = [];
    const map = new Map();

    for (const item of order) {
      if (!map.has(item.name)) {
        map.set(item.name, true);
        const sameItems = order.filter((i) => i.name === item.name);
        const totalCost = sameItems.reduce((total, i) => total + i.price, 0);
        const quantity = sameItems.length;
        tidy.push({ ...item, price: totalCost, quantity });
      }
    }

    setOrder(tidy);
  };

  const closeOrder = () => {
    setOrder([]);
    setTotalCost(0);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <table>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} onClick={() => addToOrder(item)}>
                  <td>
                    <span role="img" aria-label={item.name}>
                      {item.image}
                    </span>
                  </td>
                  <td className="item-name">
                    <span>{item.name}</span> <br />
                    <span>{"🌶️".repeat(item.spiceLevel)}</span>
                  </td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </aside>
        <section>
          <div>
            <h3>Current Order</h3>
            <ul className="current-order-list">
              {order.map((item, index) => (
                <li key={index}>
                  <button onClick={() => removeFromOrder(item)}>❌</button>
                  {item.name} - ${item.price} (Quantity: {item.quantity})
                </li>
              ))}
            </ul>
            <h4>Total: ${totalCost}</h4>
            <div className="button-container">
              <button onClick={tidyOrder}>Tidy Order</button>
              <button onClick={closeOrder}>Clear Order</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <PastOrders pastOrders={[]} />
    </div>
  );
}

export default App;
