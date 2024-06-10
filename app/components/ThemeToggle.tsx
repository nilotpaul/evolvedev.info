import { useTheme } from './ThemeProvider';
import { useMounted } from '~/hooks/useMounted';
import Icons from '~/config/Icons';
import { Button } from './ui/button';
import { Skeleton } from './ui/skeleton';

import { cn } from '~/lib/utils';

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  const isDark = theme === 'dark';

  const isMounted = useMounted();

  if (!isMounted) {
    return (
      <span className='flex h-8 w-8 items-center justify-center'>
        <Skeleton className='xs:h-6 xs:w-6 absolute h-5 w-5 scale-100 rounded-full transition-all sm:h-5 sm:w-5' />
      </span>
    );
  }

  return (
    <>
      {isDark ? (
        <Button onClick={() => setTheme('light')} className='h-8 w-8' variant='ghost' size='icon'>
          <Icons.Sun
            className={cn('xs:h-6 xs:w-6 absolute h-5 w-5 scale-100 transition-all sm:h-5 sm:w-5', {
              'scale-0': !isDark,
            })}
          />
          <span className='sr-only'>Switch to light mode</span>
        </Button>
      ) : (
        <Button onClick={() => setTheme('dark')} className='h-8 w-8' variant='ghost' size='icon'>
          <Icons.Moon
            className={cn('xs:h-6 xs:w-6 absolute h-5 w-5 scale-100 transition-all sm:h-5 sm:w-5', {
              'scale-0': isDark,
            })}
          />
          <span className='sr-only'>Switch to dark mode</span>
        </Button>
      )}
    </>
  );
};

export default ThemeToggle;
