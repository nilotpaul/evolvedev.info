import Mission from '~/components/landing/Mission';
import FAQ from './FAQ';
import BlogArticle from './BlogArticles';
import Hero from './Hero';
import Subscribe from './Subscribe';

const Landing = () => {
  return (
    <div className='flex flex-col items-start gap-y-24 lg:gap-y-32'>
      <Hero />
      <Mission className='mb-16' />
      <BlogArticle />
      <FAQ />
      <Subscribe />
    </div>
  );
};

export default Landing;
