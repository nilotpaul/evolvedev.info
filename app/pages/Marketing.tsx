import { json, LoaderFunctionArgs } from '@remix-run/cloudflare';
import { useMounted } from '~/hooks/useMounted';
import { getPosts } from '~/lib/hygraph';

import Container from '~/components/Container';
import Footer from '~/components/Footer';
import Landing from '~/components/landing';
import Navbar from '~/components/Navbar';
import { cacheHeaders } from '~/config/app';

export const headers = cacheHeaders();

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const env = context.cloudflare.env;
  const posts = await getPosts({
    HYGRAPH_API_URL: env.HYGRAPH_API_URL,
    HYGRAPH_API_TOKEN: env.HYGRAPH_API_TOKEN,
  });

  if (!posts || posts.length === 0) {
    return json({ posts: [] });
  }

  return json({ posts });
};

const Marketing = () => {
  const isMounted = useMounted();
  if (!isMounted) return;

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
