import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";


const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) return <p>Tu carrito está vacío.</p>;

  return (
    <div className="cart-container">
      <h3>Carrito de Compras</h3>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <p>{item.name} x {item.quantity} - ₡{(item.price * item.quantity).toLocaleString()}</p>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
      <h4>Total: ₡{total.toLocaleString()}</h4>
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;
