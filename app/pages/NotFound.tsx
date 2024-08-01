import { Link } from '@remix-run/react';
import Navbar from '~/components/Navbar';
import { Button } from '~/components/ui/button';
import Icons from '~/config/Icons';

type NotFoundProps = {
  info?: string;
};

const NotFound = ({ info }: NotFoundProps) => {
  return (
    <>
      <Navbar />

      <div className='-mt-6 flex h-[calc(100vh-6rem-8rem)] w-full items-center justify-center sm:h-[calc(100vh-6rem-4rem)]'>
        <div className='flex flex-col gap-4 text-center'>
          <h1 className='xs:text-[10rem] xs:leading-snug my-0 text-[9rem] font-bold leading-tight sm:leading-tight'>
            404
          </h1>

          <div className='flex flex-col items-center justify-center gap-6'>
            <p className='text-lg md:text-xl'>{info ?? 'Page Not Found'}</p>

            <Button
              size='icon'
              className='mx-auto h-10 w-10 justify-center rounded-full font-semibold tracking-wide'
            >
              <Link to='/'>
                <Icons.leftArrow className='h-6 w-6' />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
