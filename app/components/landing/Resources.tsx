import Heading from '../ui/Heading';

const Resources = () => {
  return (
    <section className='w-full'>
      <Heading
        classNames={{
          h1: 'text-center mx-auto text-2xl font-bold',
        }}
      >
        Resources
      </Heading>

      <div className='mt-16 flex w-full items-center justify-between'>
        <div className='max-w-sm p-4'>
          <img src='/assets/res-1.png' alt='Resource 1' className='w-full max-w-20' />

          <div className='py-6 pl-1'>
            <h3 className='mb-3 text-xl font-bold'>Whitepapers</h3>
            <p className='leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,
              consectetur adipiscing elit
            </p>
          </div>
        </div>

        <div className='max-w-sm p-4'>
          <img src='/assets/res-2.png' alt='Resource 2' className='w-full max-w-20' />

          <div className='py-6 pl-1'>
            <h3 className='mb-3 text-xl font-bold'>Whitepapers</h3>
            <p className='leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,
              consectetur adipiscing elit
            </p>
          </div>
        </div>

        <div className='max-w-sm p-4'>
          <img src='/assets/res-3.png' alt='Resource 3' className='w-full max-w-20' />

          <div className='py-6 pl-1'>
            <h3 className='mb-3 text-xl font-bold'>Whitepapers</h3>
            <p className='leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,
              consectetur adipiscing elit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
