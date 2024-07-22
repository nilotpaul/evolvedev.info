import Container from '~/components/Container';
import Footer from '~/components/Footer';
import Landing from '~/components/landing';
import Navbar from '~/components/Navbar';

const Marketing = () => {
  return (
    <>
      <Navbar />

      <Container className='mb-32 mt-20'>
        <Landing />
      </Container>

      <Footer />
    </>
  );
};

export default Marketing;
