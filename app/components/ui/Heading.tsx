import { Separator } from './separator';
import { cn } from '~/lib/utils';

type HeadingProps = {
  classNames?: {
    h1?: string;
    separator?: string;
  };
} & Omit<JSX.IntrinsicElements['h1'], 'className'>;

const Heading = ({ classNames, children, ...props }: HeadingProps) => {
  return (
    <h2
      className={cn('xs:text-xl w-fit text-base font-semibold md:text-2xl', classNames?.h1)}
      {...props}
    >
      {children}

      <Separator
        className={cn('mx-auto mt-3 h-1 rounded-full bg-gray-400', classNames?.separator)}
      />
    </h2>
  );
};

export default Heading;
