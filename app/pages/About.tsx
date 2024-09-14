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
    <div className='prose mb-24 max-w-5xl leading-loose dark:prose-invert prose-h1:text-3xl'>
      <>
        <h1 className='pt-12'>About Us </h1>
        <p>
          At Evolve Dev, we are committed to making the development process faster and smarter. We
          focus on building tools, frameworks, and open-source projects that simplify the lives of
          developers and enhance their productivity.
        </p>
        <p>
          Our journey started with EvolveAsDev, a platform designed to offer developers
          preconfigured tech stacks, helper functions, and customizable configurations. The goal was
          simple—reduce the time spent setting up projects and let developers focus on what truly
          matters: writing code. Whether you&appos;re a beginner or a seasoned developer, our tools
          help streamline workflows and eliminate the usual setup hassles.
        </p>
        <p>
          In addition to EvolveAsDev, we’ve developed KyrixJs, a full-stack solution for building
          modern web applications.
        </p>
      </>

      <div className='py-16'>
        <h1>Our Vision</h1>
        <p>
          We believe that development should be accessible, efficient, and future-proof. As
          developers ourselves, we’re committed to building tools that solve real-world problems.
          Our mission is to contribute to the community with valuable open-source projects,
          tutorials, and guides that reflect our hands-on experience and expertise. We’re focused on
          continuous learning and improvement—both for ourselves and for the broader developer
          community.
        </p>
      </div>

      <div className='flex flex-col gap-y-9'>
        <div>
          <h1>What we offer?</h1>
          <ul>
            <li>
              <span className='font-bold'>Preconfigured Tech Stacks:</span> Save time with
              ready-to-use configurations for databases, CSS frameworks, and essential development
              tooling.
            </li>
            <li>
              <span className='font-bold'>Open-Source Contributions:</span> Our open-source projects
              aim to solve common developer pain points and are available for free to help the
              community.
            </li>
            <li>
              <span className='font-bold'>Comprehensive Tutorials & Guides:</span> Learn about
              modern web technologies, cloud computing, microservices, DevOps, and more with
              hands-on content.
            </li>
            <li>
              <span className='font-bold'>Developer-Focused Frameworks: </span>Tools like KyrixJs
              are built with performance, simplicity, and SEO in mind, offering a complete solution
              for building fast and scalable applications.
            </li>
          </ul>
        </div>

        <div>
          <h1 className='mb-4 text-3xl font-bold'>Our Future Plans</h1>
          <ul>
            <li>
              <span className='font-bold'>Customizable DevOps Pipelines:</span> Streamlined
              pipelines for continuous integration and deployment tailored to various tech stacks.
            </li>
            <li>
              <span className='font-bold'>Full-Stack SaaS Frameworks:</span> Pre-built SaaS
              boilerplates that combine flexibility with the speed of modern development practices.
            </li>
            <li>
              <span className='font-bold'>Advanced Security Solutions:</span> Focus on providing
              secure authentication methods, encryption protocols, and solutions for handling
              sensitive data in modern applications.
            </li>
            <li>
              <span className='font-bold'>Cloud-Native Development:</span> Expand into providing
              tools and guides for seamless cloud integration, focusing on AWS, GCP, and other
              platforms.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
