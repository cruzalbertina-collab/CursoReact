import React, { useContext } from "react";

import { CartContext } from "../Context/CartContext";
import { ProductContext } from "../Context/ProductContext";

const Catalogo = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="catalogo-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h4>{product.name}</h4>
          <p>₡{product.price.toLocaleString()}</p>
          <button onClick={() => addToCart(product)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default Catalogo;
