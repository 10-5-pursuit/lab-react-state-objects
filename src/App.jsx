import Footer from "./Footer";
import Header from "./Header";
import  menuItems  from "./data"
import { useState } from "react";
import { v4 as generateUniqueId } from "uuid";

function App() {

  const [foods, setFoods] = useState(menuItems)
  const [addedFood, setAddedFoods] = useState([])
  const [totalCost, setTotalCost] = useState(0);
 
  const addFood = (food) => {
    let newId = {...food, instanceId: generateUniqueId()}
    setAddedFoods([...addedFood, newId])
    setTotalCost(totalCost + food.price)
  }

  const removeFood = (removedFood) => {
    const newFoodArr = addedFood.filter((food) => food.instanceId !== removedFood.instanceId);
    setAddedFoods(newFoodArr)
    depletedFoodCost(removedFood);
  }

  const depletedFoodCost = (food) => {
    setTotalCost(totalCost - food.price)
  }

  const closeOrder = () => {
    setAddedFoods([]);
    setTotalCost(0);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <table>
            <tbody>
              {foods.map((food) => {
                return (
                  <tr key={food.id} className="item-name" onClick={() => addFood(food)}>
                    <td>{food.image}</td>
                    <td key={generateUniqueId()}><span>{food.name}</span> <br />
                    <span>{"🌶️".repeat(food.spiceLevel)}</span>
                    </td>
                    <td>${food.price}</td>
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
              {addedFood.map(food => {
                return(
                <li key={generateUniqueId()}><span onClick={() => removeFood(food)}> ❌ </span><span>{food.name}</span>${food.price}</li>
                )
              })}
             
            </ul>
            <h4>Total: ${totalCost}</h4>
            <div>
              <button>Tidy order</button>
              <button onClick={closeOrder}>Close order</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
