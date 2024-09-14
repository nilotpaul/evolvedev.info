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
          h1: 'text-2xl md:mx-auto md:text-center font-bold',
        }}
      >
        Our Mission and Vision
      </Heading>

      <p className='mt-10 text-base leading-loose md:text-center lg:text-lg'>
        At Evolve Dev, our goal is to make development faster and more efficient. We provide tools
        and guidance to streamline project creation, handle changes seamlessly, and support
        developers at every stage. We&apos;re focused on building valuable open-source projects to
        contribute to the community, with a long-term vision of helping companies of all sizes
        improve their development processes.
      </p>
    </section>
  );
};

export default Mission;
