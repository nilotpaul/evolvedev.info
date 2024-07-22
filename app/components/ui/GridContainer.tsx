import { cn } from '~/lib/utils';

export function GridContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'xs:grid-cols-1 grid w-full gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3',
        className
      )}
    >
      {children}
    </div>
  );
}
