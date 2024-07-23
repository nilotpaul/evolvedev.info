import { useTheme } from '../ThemeProvider';

const Top = () => {
  const { theme } = useTheme();
  return (
    <div className='grid  grid-cols-[1.5fr_1fr] items-center justify-center gap-24'>
      <div className='flex w-full flex-col justify-center'>
        <h1 className='roboto-black noto-sans-600 transform overflow-hidden break-normal break-words font-mono text-5xl font-bold italic leading-tight transition duration-500 hover:scale-110 hover:text-gray-500'>
          Empowering Coders to Evolve and Excel
        </h1>

        <p className='roboto-mono-400 mt-5 transform text-start font-mono text-3xl transition duration-500 hover:scale-110 hover:text-gray-500'>
          Powering the future of web development with EvolveDev!
        </p>
      </div>

      <img
        className='duration-5000'
        src={theme === 'dark' ? '/image-dark.png' : '/image-light.png'}
        alt='Site Artwork'
      />
    </div>
  );
};

export default Top;
