// Menu.jsx
import React from "react";

function Menu({ menuItems, addToOrder }) {
  return (
    <aside>
      <h2>Menu</h2>
      <table>
        <tbody>
          {menuItems.map((item) => (
            <tr key={item.id} onClick={() => addToOrder(item)}>
              <td>{item.image}</td>
              <td className="item-name">
                <span>{item.name}</span> <br />
                <span>{"🌶️".repeat(item.spiceLevel)}</span>
              </td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </aside>
  );
}

export default Menu;
