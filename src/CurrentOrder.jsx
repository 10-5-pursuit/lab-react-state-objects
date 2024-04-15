// CurrentOrder.jsx

export default function CurrentOrder({
  order,
  totalCost,
  removeFromOrder,
  tidyOrder,
  closeOrder,
}) {
  return (
    <div>
      <h3>Current Order</h3>
      <ul>
        {order.map((item, index) => (
          <li key={index}>
            <button onClick={() => removeFromOrder(item)}>❌</button>
            {item.name} - ${item.price} (Quantity: {item.quantity})
          </li>
        ))}
      </ul>
      <h4>Total: ${totalCost}</h4>
      <button onClick={tidyOrder}>Tidy Order</button>
      <button onClick={closeOrder}>Close Order</button>
    </div>
  );
}
