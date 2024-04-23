import Footer from "./Footer";
import Header from "./Header";
import menuItems from "./data";
import {v4 as generateUniqueId} from "uuid";
import { useState } from "react";

function App() {

  const [foodItems, setFoodItems] = useState(menuItems);
  const [total, setTotal] = useState(0);
  const[order, setOrder] = useState([])

  const addMenuItem = (idx) => {

    const item = foodItems[idx]
    setOrder([...order, item]);
      
    setTotal(total + item.price);
  }

  const removeFromList = (idx) => {

    const currentOrderList = [...order];

    const filteredOrder = currentOrderList.filter((item, index) => index !== idx);

    const itemToRemove = currentOrderList[idx].price;

    setTotal(total => total - itemToRemove)

    setOrder(filteredOrder);
  }

  const closeOrder = () => {
    setTotal(0);
    setOrder([]);
  }


  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <table>
            <tbody>
              {foodItems.map((items, idx) => {

                return (

                  <tr className="item-name" key={generateUniqueId()} onClick={() => addMenuItem(idx)}>
                    <td>{items.image }</td>
                    <td>
                      <p>{items.name}</p>
                      <p className="peppers">{"🌶️".repeat(items.spiceLevel)}</p>
                    </td>
                    <td>${items.price}</td>
                    </tr>

                )
              })}
            </tbody>
          </table>
        </aside>
        <section>
          <div>
            <h2>Current Order</h2>
            <ul>
              {order.map((food, idx) => {
                
                const {name, price} = food;
                return (
                
                <li className="item-list" key={generateUniqueId()} > <p><span onClick={() => removeFromList(idx)} >❌</span> {name} ${price}</p></li>
                )                
                })}

            </ul>
            <h4>Total: ${total}</h4>
            <div>
              <button>Tidy order</button>
              <button onClick={() => closeOrder({total, order})}>Close Order</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
