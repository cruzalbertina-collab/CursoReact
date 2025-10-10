import { useState, useEffect } from "react";

const CART_KEY = "cart"; // clave usada en localStorage

export const useCartTotal = () => {
  const [total, setTotal] = useState(0);

  // Función para calcular el total basado en el carrito en localStorage
  const calculateTotal = () => {
    const storedCart = localStorage.getItem(CART_KEY);
    if (!storedCart) return 0;

    const cart = JSON.parse(storedCart);
    const totalAmount = cart.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
    return totalAmount;
  };

  // Inicializar el total al cargar
  useEffect(() => {
    setTotal(calculateTotal());
  }, []);

  // Actualizar total si se detecta cambio en localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      setTotal(calculateTotal());
    };

    window.addEventListener("cartUpdated", handleStorageChange);
    return () => {
      window.removeEventListener("cartUpdated", handleStorageChange);
    };
  }, []);

  return total;
};
