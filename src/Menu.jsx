// Menu.jsx

export default function Menu({ data, addToOrder }) {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index} onClick={() => addToOrder(item)}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
