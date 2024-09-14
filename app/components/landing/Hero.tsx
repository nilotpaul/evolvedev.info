import { useTheme } from '../ThemeProvider';

const Hero = () => {
  const { theme } = useTheme();

  return (
    <div className='grid gap-16 lg:grid-cols-[1.5fr,1fr]'>
      <div className='my-24 mr-auto mt-16 flex w-full max-w-4xl flex-col justify-center lg:mt-24'>
        <h1 className='font-sans text-4xl font-bold leading-tight md:text-center md:text-5xl md:leading-snug lg:text-start lg:leading-snug'>
          Empowering Developers to Evolve and Excel
        </h1>

        <p className='mt-8 max-w-lg text-lg font-medium leading-relaxed text-gray-600 dark:text-gray-400 md:mx-auto md:text-center lg:mx-0 lg:text-start lg:text-xl'>
          Powering the future of mordern development with EvolveDev.
        </p>
      </div>

      <img
        alt='EvolveDev Artwork'
        src={theme === 'dark' ? '/image-dark.png' : '/image-light.png'}
        className='hidden lg:block'
      />
    </div>
  );
};

export default Hero;
