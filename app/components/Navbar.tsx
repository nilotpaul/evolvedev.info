import { useState } from 'react';

import ThemeToggle from './ThemeToggle';
import Container from './Container';
import { NavLink } from '@remix-run/react';
import { NAV_LINKS } from '~/config/site-links';
import Brand from './Brand';
import { cn } from '~/lib/utils';
import { Text, X } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

const Navbar = () => {
  return (
    <nav className='sticky left-0 top-0 z-40 flex h-16 w-full items-center justify-center border-b border-slate-300 bg-background dark:border-b-neutral-800'>
      <Container className='flex w-full items-center justify-between'>
        <div className='flex w-full items-center justify-between'>
          <div className='flex items-center space-x-20'>
            <Brand
              classNames={{
                logo: '-ml-2.5',
              }}
            />

            <div className='mx-auto hidden w-full items-center justify-center gap-8 md:flex'>
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      'mt-1 rounded-md p-1 px-2 text-sm font-medium text-black hover:bg-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-900',
                      {
                        'rounded-md bg-gray-300 text-black dark:bg-gray-900': isActive,
                      }
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className='flex cursor-pointer items-center gap-3'>
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </Container>
    </nav>
  );
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger aria-label={isOpen ? 'Close Menu' : 'Open Menu'} className='md:hidden'>
        {isOpen ? <X /> : <Text />}
      </SheetTrigger>
      <SheetContent aria-describedby='Navigation Menu' side='left' className='md:hidden'>
        <SheetHeader className='items-start gap-2'>
          <SheetTitle className='pb-3 underline'>Menu</SheetTitle>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn('mt-1 text-sm font-medium text-gray-700 hover:underline dark:text-gray-300', {
                  'font-semibold text-black': isActive,
                })
              }
            >
              {link.name}
            </NavLink>
          ))}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Navbar;
