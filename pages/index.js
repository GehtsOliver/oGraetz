import AboutPage from "../components/landing-page/About";
import StackPage from "../components/landing-page/Stack";
import EntryPage from "../components/landing-page/Entry";
import Layout from "../components/Layout";

const index = () => {
  return (
    <Layout>
      <EntryPage />
      <AboutPage />
      <StackPage />
    </Layout>
  );
};

export default index;
