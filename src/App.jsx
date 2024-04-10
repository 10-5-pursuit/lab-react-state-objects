import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import menuItems from "./data";

function App() {

  const [total, updateTotal] = useState(0);
  const [order, updateOrder] = useState([]);
  
  function addToOrder(item){
    updateOrder([...order, item]);
    updateTotal(total + item.price);
  }

  function removeItem(item){
    updateOrder(order.toSpliced(order.indexOf(item), 1));
    updateTotal(total - item.price);
  }

  function resetOrder(){
    updateOrder([]);
    updateTotal(0);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <table>
            <tbody>
              {menuItems.map(item => {
                return(
                  <tr key={item.id} onClick={() => addToOrder(item)}>
                    <td>{item.image}</td>
                    <td>
                      {item.name}<br/>
                      {"🌶️".repeat(item.spiceLevel)}
                    </td>
                    <td>${item.price}</td>
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
            {order.map(item => {
                return(
                  <li>
                    <span onClick={() => removeItem(item)}>❌</span><span>{item.name}</span>${item.price}
                  </li>
                )
              })}
            </ul>
            <h4>Total:${total}</h4>
            <div>
              <button>Tidy order</button>
              <button onClick={resetOrder}>Close order</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
