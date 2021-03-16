import React, { createContext, useState } from "react";

export const BurgerMenuContext = createContext();

const BurgerMenuContextProvider = ({ children }) => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <BurgerMenuContext.Provider value={{ burgerMenu, setBurgerMenu }}>
      {children}
    </BurgerMenuContext.Provider>
  );
};

export default BurgerMenuContextProvider;
