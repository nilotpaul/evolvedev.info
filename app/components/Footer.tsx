import { cn } from '~/lib/utils';
import Container from './Container';

type FooterProps = JSX.IntrinsicElements['div'];

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <div className={cn('mt-20 min-h-[150px] w-full border-t', className)} {...props}>
      <Container className='mt-4'>Footer</Container>
    </div>
  );
};

export default Footer;
