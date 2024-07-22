const Top = () => {
  return (
    <div className='grid  grid-cols-[1.5fr_1fr] items-center justify-center gap-24'>
      <div className='flex w-full flex-col justify-center'>
        <h1 className='transform overflow-hidden break-normal break-words font-mono text-5xl font-bold italic leading-tight transition duration-500 hover:scale-110 hover:text-gray-500'>
          Development, Simplified !
        </h1>

        <p className='mt-5 transform text-start font-mono text-3xl transition duration-500 hover:scale-110 hover:text-gray-500'>
          Powering the future of web development with EvolveDev !
        </p>
      </div>

      <img className='duration-5000' src='/assets/landing-img1.png' alt='Site Artwork' />
    </div>
  );
};

export default Top;
