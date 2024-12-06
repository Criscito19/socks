import React, { createContext, useState } from 'react';

export const DesignContext = createContext();

export const DesignProvider = ({ children }) => {
  const [savedDesigns, setSavedDesigns] = useState([]);
  const [cartDesigns, setCartDesigns] = useState([]); //

  const deleteHandler = (id) => {
    setSavedDesigns(savedDesigns.filter((design) => design.id !== id));
    setCartDesigns(cartDesigns.filter((design) => design.id !== id)); 
  };

  const addToCart = (design) => {
    setCartDesigns([...cartDesigns, design]);
  };

  const clearCart = (updatedDesigns) => {
    setCartDesigns(updatedDesigns);
  };

  return (
    <DesignContext.Provider value={{
      savedDesigns,
      setSavedDesigns,
      cartDesigns,
      addToCart,
      deleteHandler,
      clearCart
    }}>
      {children}
    </DesignContext.Provider>
  );
};