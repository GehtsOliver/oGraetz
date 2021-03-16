import "../styles/globals.css";
import Meta from "../components/utility/Meta";
import BurgerMenuContextProvider from "../context/BurgerMenuContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <BurgerMenuContextProvider>
        <Component {...pageProps} />
      </BurgerMenuContextProvider>
    </>
  );
}

export default MyApp;
