import "../styles/globals.css";
import HeadElement from "../components/partials/Head";

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps}/>
  );
}

export default MyApp;
