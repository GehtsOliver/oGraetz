import Head from "next/head";

import styles from "../styles/Home.module.css";
import styled from "styled-components";

import Entry from "./components/landing-page/Entry/Entry";
import About from "./components/landing-page/About/About";
import Video from "./components/landing-page/Entry/Video";
import Specialisation from "./components/landing-page/Specialisation/Specialisation";
import Stack from "./components/landing-page/Stack/Stack";
import Footer from "./components/partials/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>oGraetz</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;400;500;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <Video />
      <Entry />
      <About />
      <hr></hr>
      <Specialisation />
      <hr></hr>
      <Stack />
      <hr></hr>
      <Footer />
    </>
  );
}
