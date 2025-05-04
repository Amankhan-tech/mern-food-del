import React, { useState } from "react";
import { StoreContext } from "./StoreContext";

const StoreContextProvider = ({ children }) => {
  const [category, setCategory] = useState("All");

  const ContextValue = {
    category,
    setCategory,
  };

  return (
    <StoreContext.Provider value={ContextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
