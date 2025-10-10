import React, { createContext } from "react";
import ArcoOrganicoImg from '../react-icons/arcoorganico.jpg'
import arcosemiorganico from '../react-icons/semi-arco-organico.jpg'
import base1metro from '../react-icons/base-un-metro.jpg'
import bouquet from '../react-icons/bouquet.jpg' 
import paredorganica from '../react-icons/pared-organica.jpg' 
import shimerwall from '../react-icons/pared-shimer-wall.jpg'
// Crear contexto
export const ProductContext = createContext();

// Proveedor de productos
export const ProductProvider = ({ children }) => {
  const products = [
    {
      id: 1,
      name: "Arco organico",
      price: 50000,
      image: ArcoOrganicoImg
      
    },
    {
      id: 2,
      name: "Semi arco organico",
      price: 60000,
      image: arcosemiorganico,
    },
    {
      id: 3,
      name: "Base de un metro",
      price: 15000,
      image: base1metro,
    },
    {
      id: 4,
      name: "Bouquet",
      price: 25000,
      image: bouquet,
    },
    {
      id: 5,
      name: "Pared organica",
      price: 80000,
      image: paredorganica,
    },
    {
      id: 6,
      name: "Pared shimer wall",
      price: 150000,
      image: shimerwall,
    },
  ];

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
