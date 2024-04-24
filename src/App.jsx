import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import CurrentOrder from "./CurrentOrder";


function App() {
  const [total,setTotal] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  

  function addItem(item){

    setCurrentItems([...currentItems, { ...item}]);
    setTotal(total + item.price);
  }

  function deleteItem(idx){
    const removedItem = currentItems[idx];
    const updatedOrder = currentItems.filter((item, ind) => ind !== idx);
    setCurrentItems(updatedOrder);
    setTotal(total - removedItem.price);
  }


  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <Menu addItem={addItem}/>
        </aside>
        <section>
          <CurrentOrder currentOrder={currentItems} total={total} delItems={deleteItem}/>
        </section> 
      </main>
      <Footer />
    </div>
  );
}

export default App;
