import { MetaFunction } from '@remix-run/cloudflare';
import { makeMetaTitle } from '~/lib/utils';

export const meta: MetaFunction = () => {
  return [
    {
      title: makeMetaTitle('About'),
    },
  ];
};

const About = () => {
  return (
    <>
      <div className='overflow-hidden py-5'>
        <div className='mt-6'>
          <h1 className='pb-4 text-3xl font-bold text-gray-800 dark:text-white'>
            We&apos;re Transforming How Developers Evolve
          </h1>
          <p className='py-2 leading-relaxed dark:text-gray-300'>
            At EvolveDev, we believe in empowering developers with the tools and knowledge they need
            to excel. Our innovative solutions are designed to simplify complex tasks, streamline
            workflows, and enhance productivity. By providing cutting-edge technologies and
            resources, we help developers overcome challenges and achieve their goals faster.
          </p>
          <p className='py-2 leading-relaxed dark:text-gray-300'>
            Our commitment to continuous improvement ensures that we stay ahead of industry trends,
            offering the latest advancements to our community. Through our products, services, and
            expert guidance, we create an environment where developers can learn, grow, and evolve.
            We focus on building a supportive ecosystem that fosters collaboration and innovation,
            enabling developers to reach their full potential.
          </p>
          <p className='py-2 leading-relaxed dark:text-gray-300'>
            Join us on our mission to transform the development journey. Whether you&appos;re a
            seasoned professional or just starting, EvolveDev provides the platform and support you
            need to thrive. Together, we can shape the future of development, creating a world where
            developers are equipped to tackle any challenge and drive technological progress.
          </p>
        </div>
      </div>

      <div className='py-16'>
        <div className='my-8 text-start'>
          <div className='mb-6 flex flex-col items-start justify-between md:flex-row md:items-center'>
            <div className='max-w-2xl'>
              <h1 className='mb-4 text-3xl font-bold'>Our mission</h1>
              <p className='mb-4 dark:text-gray-300'>
                Our mission is to accelerate and enhance the development journey for every
                developer. We are dedicated to providing innovative tools and solutions that
                streamline workflows and boost productivity. By integrating cutting-edge
                technologies with intuitive design, we aim to make complex development processes
                simpler and more efficient.
              </p>
              <p className='mb-4 dark:text-gray-300'>
                We are dedicated to fostering a supportive and collaborative community where
                developers can learn, grow, and share knowledge. By offering comprehensive
                tutorials, in-depth guides, and a platform for peer-to-peer interaction, we aim to
                create an environment that nurtures continuous learning and professional
                development. Our goal is to not only provide tools but also to build a thriving
                ecosystem where developers can connect, collaborate, and succeed together.
              </p>
              <p className='mb-4 dark:text-gray-300'>
                Ultimately, our vision is to transform how developers approach their craft, making
                the process of coding, problem-solving, and creating seamless and enjoyable. Through
                our efforts, we strive to elevate the standards of development practices, ensuring
                that developers have the best possible resources to innovate and bring their ideas
                to life. At EvolveDev, we are committed to being a catalyst for positive change in
                the developer community, driving progress and evolution in the tech industry.
              </p>
            </div>
          </div>
          <div className='rounded-sm bg-white p-6'>
            <div className='mb-12 max-w-2xl'>
              <h1 className='mb-4 text-3xl font-bold dark:text-black'>Our values</h1>
              <p className='mb-8 text-gray-600'>
                Our core values drive everything we do. They reflect our commitment to excellence,
                innovation, and support in transforming the developer experience. These values guide
                our decisions and shape the solutions we provide, ensuring that we consistently
                deliver on our mission to empower and elevate developers.
              </p>
            </div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
              <div>
                <h2 className='mb-2 text-xl font-bold text-black'>Innovation</h2>
                <p className='text-left text-gray-600'>
                  We embrace creativity and seek out new ideas to push the boundaries of what’s
                  possible in software development. Our commitment to innovation ensures that our
                  tools and solutions are always at the forefront of technology.
                </p>
              </div>

              <div>
                <h2 className='mb-2 text-xl font-bold text-black'>Excellence</h2>
                <p className='text-left text-gray-600'>
                  Striving for excellence is at the heart of our work. We are dedicated to
                  delivering high-quality products and services that exceed expectations and set new
                  standards in the industry.
                </p>
              </div>

              <div>
                <h2 className='mb-2 text-xl font-bold text-black'>Empowerment</h2>
                <p className='text-left text-gray-600'>
                  We believe in empowering developers by providing them with the right tools and
                  resources to succeed. Our focus is on enabling growth and fostering a sense of
                  confidence in every developer we support.
                </p>
              </div>

              <div>
                <h2 className='mb-2 text-xl font-bold text-black'>Collaboration</h2>
                <p className='text-left text-gray-600'>
                  Teamwork and open communication are essential to our success. We value
                  collaboration both within our team and with our users, believing that the best
                  solutions come from shared knowledge and collective effort.
                </p>
              </div>

              <div>
                <h2 className='mb-2 text-xl font-bold text-black'>Integrity</h2>
                <p className='text-left text-gray-600'>
                  We conduct our business with honesty and transparency. Our commitment to integrity
                  ensures that we build trust with our users and partners, maintaining high ethical
                  standards in all our interactions.
                </p>
              </div>

              <div>
                <h2 className='mb-2 text-xl font-bold text-black'>Continuous Improvement</h2>
                <p className='text-left text-gray-600'>
                  The tech landscape is always evolving, and so are we. We are dedicated to
                  continuous improvement, regularly updating our solutions and processes to meet the
                  changing needs of developers and the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
