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
    setOrder(prev => 
      [...prev, item]);
      
    setTotal(prevTotal => prevTotal + item.price);
  }

  const removeFromList = () => {
    
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

                  <tr className="item-name" key = {generateUniqueId()} onClick={() => addMenuItem(idx)}> 
                  <td>{items.image}</td>
                  {items.name} <br/> <span>{"🌶️".repeat(items.spiceLevel)}</span>
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
              {order.map(food => {
                
                const {name, price} = food;
                return (
                
                <li className="item-list"key={generateUniqueId()}> <p><span>❌</span> {name} ${price}</p></li>
                )                
                })}

            </ul>
            <h4>Total: ${total}</h4>
            <div>
              <button>Tidy order</button>
              <button>Close order</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
