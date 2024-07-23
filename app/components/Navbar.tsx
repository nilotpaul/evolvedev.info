import ThemeToggle from './ThemeToggle';
import Container from './Container';
import { Link } from '@remix-run/react';
import { useTheme } from './ThemeProvider';
import { cn } from '~/lib/utils';
import { NAV_LINKS } from '~/config/site-links';

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <nav className='sticky left-0 top-0 z-40 flex h-16 w-full items-center justify-center border-b border-slate-300 bg-background dark:border-b-neutral-800'>
      <Container className='flex w-full items-center justify-between'>
        <div className='flex w-full items-center justify-between'>
          <div className='flex items-center space-x-20'>
            <Link to='/' className='mt-2 flex items-center space-x-1.5'>
              <img
                className={cn(theme === 'dark' ? 'mix-blend-lighten' : 'mix-blend-darken')}
                src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
                alt='Evolve Dev'
                width={50}
                height={50}
              />
              <p className='-mt-1 font-mono text-xl font-bold'>EvolveDev</p>
            </Link>
            <div className='flex items-center justify-center space-x-6'>
              {NAV_LINKS.map((link) => (
                <Link key={link.path} to={link.path} className='mt-2 flex items-center'>
                  <p
                    className={cn(
                      ' -mt-1 font-mono text-base font-bold text-slate-400 hover:underline',
                      {
                        'text-slate-700': theme === 'light',
                      }
                    )}
                  >
                    {link.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* make sure to seperate these components like -> Links.tsx */}

          <div className='flex cursor-pointer items-center gap-3'>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
