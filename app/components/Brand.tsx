import { Link } from '@remix-run/react';
import { useTheme } from './ThemeProvider';
import { cn } from '~/lib/utils';

type BrandProps = {
  classNames?: {
    logo?: string;
    name?: string;
  };
  linkDisabled?: boolean;
};

const Brand = ({ classNames, linkDisabled = false }: BrandProps) => {
  const { theme } = useTheme();

  if (linkDisabled) {
    return (
      <div className='flex items-center gap-1.5'>
        <img
          className={cn('mix-blend-darken dark:mix-blend-lighten', classNames?.logo)}
          src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
          alt='Evolve Dev'
          width={45}
          height={45}
        />
        <p className={cn('-mt-1 text-lg font-semibold', classNames?.name)}>EvolveDev</p>
      </div>
    );
  }

  return (
    <Link to='/' className='mt-2 flex items-center space-x-1.5'>
      <img
        className={cn('mix-blend-darken dark:mix-blend-lighten', classNames?.logo)}
        src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
        alt='Evolve Dev'
        width={45}
        height={45}
      />
      <p className={cn('-mt-1 text-lg font-semibold', classNames?.name)}>EvolveDev</p>
    </Link>
  );
};

export default Brand;
