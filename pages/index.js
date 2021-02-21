
import Entry from "../components/landing-page/Entry/Entry";
import About from "../components/landing-page/About/About";
import Video from "../components/landing-page/Entry/Video";
import Stack from "../components/landing-page/Stack/Stack";
import Footer from "../components/partials/Footer";

export default function Home() {
  return (
    <>
      <Video />

      <Entry />

      <About />

      <Stack />

      <Footer />
    </>
  );
}
