import { Outlet } from '@remix-run/react';
import Container from '~/components/Container';
import Footer from '~/components/Footer';
import Navbar from '~/components/Navbar';
import { useTheme } from '~/components/ThemeProvider';

const Home = () => {
  const { theme } = useTheme();
  if (!theme) {
    return;
  }
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
