import About from '~/components/landing/About';
import Top from './Top';
import Services from './Services';
import Resources from './Resources';
import FAQ from './FAQ';
import Article from './Article';

const Landing = () => {
  return (
    <div className='flex flex-col items-center space-y-36'>
      <Top />
      <About />
      <Services />
      <Article />
      <Resources />
      <FAQ />
    </div>
  );
};

export default Landing;
