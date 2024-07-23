import { cn } from '~/lib/utils';
import Container from './Container';
import { FaDiscord, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdAddCall } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { CgMail } from 'react-icons/cg';

type FooterProps = JSX.IntrinsicElements['div'];

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <div className={cn('mt-20 min-h-[150px] w-full border-t bg-black', className)} {...props}>
      <Container className='mt-10 '>
        <div className='flex flex-col md:flex-row'>
          <div className='grid md:w-1/3'>
            <div className='flex items-center justify-center'>
              <h1 className='-mt-1 ml-4 font-mono text-xl font-bold text-white'>EvolveDev</h1>
            </div>

            <div className='grid pl-[135px]'>
              <button className='m-2 w-40 rounded-full border-2 border-white bg-white px-1 py-0.5 text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500'>
                Home
              </button>
              <button className='m-2 w-40 rounded-full border-2 border-white bg-white px-1 py-0.5 text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500'>
                About
              </button>
              <button className='m-2 w-40 rounded-full border-2 border-white bg-white px-1 py-0.5 text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500'>
                Products
              </button>
              <button className='m-2 w-40 rounded-full border-2 border-white bg-white px-1 py-0.5 text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500'>
                Contact
              </button>
            </div>
          </div>

          <div className='flex flex-col md:w-2/3 md:flex-row'>
            <div className='px-4 py-4 md:w-1/2 md:px-10 md:py-10'>
              <h1 className='text-white'>Contact Us:</h1>
              <div className='mt-4 flex flex-col space-y-4'>
                <div className='flex items-center text-white'>
                  <FaLocationDot className='mr-2' />
                  <span>XYZ city, abc road, xyz India - 221xxx</span>
                </div>
                <div className='flex items-center text-white'>
                  <CgMail className='mr-2' />
                  <span>contact@evolvedev.info</span>
                </div>
                <div className='flex items-center text-white'>
                  <MdAddCall className='mr-2' />
                  {/* <FaCity  /> */}
                  <span>+91 900 800 700X</span>
                </div>
              </div>
            </div>

            <div className='flex flex-col items-center px-4 py-4 md:w-1/2 md:items-start md:px-10 md:py-10'>
              <h1 className='text-white'>Follow Us:</h1>
              <div className='mt-4 flex space-x-4'>
                <div className='rounded-full border border-solid border-gray-500 p-2 text-white'>
                  <FaDiscord />
                </div>
                <div className='rounded-full border border-solid border-gray-500 p-2 text-white'>
                  <FaLinkedin />
                </div>
                <div className='rounded-full border border-solid border-gray-500 p-2 text-white'>
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className='my-4 h-px border-0 bg-gray-200 dark:bg-gray-700'></hr>
        <div>
          <p className='p-2 text-center text-white'>Â© 2024 EvolveDev. All rights reserved.</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
