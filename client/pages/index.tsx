import type { NextPage } from 'next';
import Footer from 'ui/footer';
import Header from 'ui/header';
import Hero from 'ui/hero';
import Notification from 'ui/notification';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Notification />
      <Footer />
    </>
  );
};

export default Home;
