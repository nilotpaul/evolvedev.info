import { LoaderCircle, LucideProps, Sun } from 'lucide-react';
import { EnterIcon, MoonIcon, CalendarIcon, ClockIcon, CaretLeftIcon } from '@radix-ui/react-icons';
import { cn } from '~/lib/utils';
import { ComponentProps } from 'react';

const defaultClassName = 'h-5 w-5 cursor-pointer xs:h-6 xs:w-6 sm:h-5 sm:w-5';

const Icons = {
  Sun: Sun,
  Moon: MoonIcon,
  Login: ({ className, ...props }: ComponentProps<typeof EnterIcon>) => (
    <EnterIcon className={cn(defaultClassName, className)} {...props} />
  ),
  Spinner: ({ className, ...props }: LucideProps) => (
    <LoaderCircle className={cn('animate-spin', defaultClassName, className)} {...props} />
  ),
  Calender: CalendarIcon,
  Clock: ClockIcon,
  leftArrow: CaretLeftIcon,
};

export default Icons;
