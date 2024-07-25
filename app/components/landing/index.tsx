import Mission from '~/components/landing/Mission';
import FAQ from './FAQ';
import BlogArticle from './BlogArticles';
import Hero from './Hero';

const Landing = () => {
  return (
    <div className='flex flex-col items-start gap-y-24 lg:gap-y-32'>
      <Hero />
      <Mission className='mb-16' />
      <BlogArticle />
      <FAQ />
    </div>
  );
};

export default Landing;
