import { cn } from '~/lib/utils';
import Container from './Container';
import Brand from './Brand';
import Icons from '~/config/Icons';
import { Link } from '@remix-run/react';
import { NAV_LINKS } from '~/config/site-links';

type FooterProps = JSX.IntrinsicElements['div'];

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <div
      className={cn(
        'min-h-[150px] w-full border-t border-gray-400 pb-20 dark:border-border dark:bg-black',
        className
      )}
      {...props}
    >
      <Container className='mt-10 flex flex-col justify-between gap-10 md:flex-row'>
        <section>
          <Brand
            classNames={{
              name: 'text-2xl',
              logo: '-ml-2.5',
            }}
            linkDisabled
          />
          <p className='mt-5 max-w-sm font-medium leading-relaxed'>
            Powering the future of web development with EvolveDev.
          </p>

          <div className='mt-8 flex items-center gap-5'>
            <Link to='https://linkedin.com/company/evolve-dev-cmp' rel='noreferrer' target='_blank'>
              <Icons.LinkedInLogo className='fill-slate-600 transition-colors hover:fill-black dark:fill-gray-300' />
            </Link>
            <Link to='https://x.com/evolvedev_pvt' rel='noreferrer' target='_blank'>
              <Icons.X className='fill-slate-600 transition-colors hover:fill-black dark:fill-gray-300' />
            </Link>
            {/* uncomment this line when Discord link is available. */}
            {/* <Link to='#' rel='noreferrer' target='_blank'>
              <Icons.Discord className='h-6 w-6 fill-slate-600 dark:fill-gray-300 hover:fill-black transition-colors' />
            </Link> */}
            <Link to='https://dev.to/evolvedev' rel='noreferrer' target='_blank'>
              <Icons.Dev_to className='h-7 w-7 fill-slate-600 transition-colors hover:fill-black dark:fill-gray-300' />
            </Link>
          </div>

          <p className='mt-8 hidden md:inline-block'>
            Copyright &copy; EvolveDev Inc. {new Date().getFullYear()} All Rights Reserved
          </p>
        </section>

        <section className='flex gap-24'>
          <div className='flex flex-col'>
            <h1 className='mb-6 text-xl font-bold'>Links</h1>

            <div className='flex flex-col gap-4'>
              {NAV_LINKS.map((link) => (
                <Link
                  className='text-gray-600 hover:underline dark:text-gray-300'
                  key={link.path}
                  to={link.path}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
        <p className='md:hidden'>
          Copyright &copy; EvolveDev Inc. {new Date().getFullYear()} All Rights Reserved
        </p>
      </Container>
    </div>
  );
};

export default Footer;
