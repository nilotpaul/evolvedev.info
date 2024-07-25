import { Outlet } from '@remix-run/react';
import { useMounted } from '~/hooks/useMounted';

import Container from '~/components/Container';
import Footer from '~/components/Footer';
import Navbar from '~/components/Navbar';

const Home = () => {
  const isMounted = useMounted();
  if (!isMounted) return;

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
