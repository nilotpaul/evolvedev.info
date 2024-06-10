import ThemeToggle from './ThemeToggle';
import Container from './Container';
import { Link } from '@remix-run/react';
import { NAV_LINKS } from '~/config/site-links';

const Navbar = () => {
  return (
    <nav className='sticky left-0 top-0 z-40 flex h-16 w-full items-center justify-center border-b border-slate-300 bg-background dark:border-b-neutral-800'>
      <Container className='flex w-full items-center justify-between'>
        <div className='flex w-full items-center justify-between'>
          <Link to='/'>logo</Link>

          {/* make sure to seperate these components like -> Links.tsx */}
          <div className='space-x-4'>
            {NAV_LINKS.map((link) => (
              <Link key={link.path} to={link.path}>
                {link.name}
              </Link>
            ))}
          </div>

          <div className='flex cursor-pointer items-center gap-3'>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
