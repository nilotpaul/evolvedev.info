import { cn } from '~/lib/utils';

type ContainerProps = {
  children: React.ReactNode;
} & JSX.IntrinsicElements['div'];

const Container = ({ className, children, ...props }: ContainerProps) => {
  return (
    <div {...props} className={cn('mx-auto max-w-[85rem] px-4', className)}>
      {children}
    </div>
  );
};

export default Container;
