"use client";
import React, { createContext, useState } from "react";
export const Context = createContext();
const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
   const [selectedItem, setSelectedItem] = useState(null);
  const data = {
    cart,
    setCart,
    selectedItem,
     setSelectedItem
  };
  return (
    <div>
      <Context.Provider value={data}>{children}</Context.Provider>
    </div>
  );
};

export default ContextProvider;
