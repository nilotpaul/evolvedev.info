import Mission from '~/components/landing/Mission';
import Top from './Top';
import Services from './Services';
import Resources from './Resources';
import FAQ from './FAQ';
import Article from './Article';
import BlogArticle from './BlogArticles';

const Landing = () => {
  return (
    <div className='flex flex-col items-center space-y-36'>
      <Top />
      <Mission />
      <Services />
      <Article />
      <BlogArticle />
      <Resources />
      <FAQ />
    </div>
  );
};

export default Landing;
