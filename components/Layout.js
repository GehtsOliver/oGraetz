import Head from "next/head";
import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import Video from "../components/partials/utils/Video";
import { useRouter } from "next/router";
import { Context } from "../context/Context";
import { useContext, useEffect } from "react";
import BurgerMenu from "./partials/utils/BurgerMenu";
import Loading from "./utility/Loading";

export default function Layout({
  title = "oGraetz - Web Developer",
  keywords = "oGraetz, Oliver Graetz, Web Developer, JavaScript",
  description = "Oliver Graetz, Professional Web Developer based in Vienna",
  children,
}) {
  const router = useRouter();

  const { burgerMenu, setBurgerMenu, loading } = useContext(Context);

  // Set burgerMenu false on pageload
  useEffect(() => {
    setBurgerMenu(false);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossOrigin="anonymous"
        />
      </Head>

      <Header />

      {router.asPath !== "/blog" && !router.asPath.includes("/projects") && (
        <Video />
      )}

      {!burgerMenu ? (
        !loading ? (
          <main className="flex-column gap">{children}</main>
        ) : (
          <Loading />
        )
      ) : (
        <BurgerMenu />
      )}
      {!burgerMenu ? router.asPath === "/" ? <Footer /> : "" : ""}
    </>
  );
}
