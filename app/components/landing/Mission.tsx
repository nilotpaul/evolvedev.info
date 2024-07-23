import Heading from '../ui/Heading';

const Mission = () => {
  return (
    <section className='prose max-w-4xl text-center dark:prose-invert'>
      <Heading
        classNames={{
          h1: 'text-center mx-auto text-2xl font-bold roboto-mono-500',
        }}
      >
        Our Mission and Vision
      </Heading>

      <p className='roboto-mono-500 mt-16 leading-loose'>
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
