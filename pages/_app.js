import "../styles/globals.css";

import BurgerMenuContextProvider from "../context/BurgerMenuContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <BurgerMenuContextProvider>
        <Component {...pageProps} />
      </BurgerMenuContextProvider>
    </>
  );
}

export default MyApp;
