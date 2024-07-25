import { cn } from '~/lib/utils';
import Heading from '../ui/Heading';

type MissionProps = {
  className?: string;
};

const Mission = ({ className }: MissionProps) => {
  return (
    <section className={cn('prose mx-auto max-w-4xl dark:prose-invert', className)}>
      <Heading
        classNames={{
          h1: 'text-2xl mx-auto text-center font-bold',
        }}
      >
        Our Mission and Vision
      </Heading>

      <p className='mt-10 text-center text-base leading-loose lg:text-lg'>
        At Evolve Dev, we’re dedicated to transforming the developer experience by providing
        state-of-the-art tools and expert guidance. Our mission is to empower developers to reach
        their full potential, optimize business processes, and enhance continuous learning and
        development. With innovative solutions like EvolveLogger we aim to change how developers
        work, collaborate and create, ensuring they stay ahead of the fast-paced tech landscape.
        Join us and enhance your growth journey to reach new heights in your career.
      </p>
    </section>
  );
};

export default Mission;
