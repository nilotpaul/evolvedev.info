import { json, LoaderFunctionArgs } from '@remix-run/cloudflare';
import Container from '~/components/Container';
import Footer from '~/components/Footer';
import Landing from '~/components/landing';
import Navbar from '~/components/Navbar';
import { getPosts } from '~/lib/hygraph';

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const env = context.cloudflare.env;
  const posts = await getPosts({
    HYGRAPH_API_URL: env.HYGRAPH_API_URL,
    HYGRAPH_API_TOKEN: env.HYGRAPH_API_TOKEN,
  });

  return json({ posts });
};

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
