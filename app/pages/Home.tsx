import { Outlet } from '@remix-run/react';
import Container from '~/components/Container';
import Footer from '~/components/Footer';
import Navbar from '~/components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />

      <Container className='mt-6'>
        <Outlet />
      </Container>

      <Footer />
    </>
  );
};

export default Home;
