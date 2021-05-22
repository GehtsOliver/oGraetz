import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <Context.Provider
      value={{ burgerMenu, setBurgerMenu, loading, setLoading }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
