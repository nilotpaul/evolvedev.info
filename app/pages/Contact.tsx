import { MetaFunction } from '@remix-run/cloudflare';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { makeMetaTitle } from '~/lib/utils';

export const meta: MetaFunction = () => {
  return [
    {
      title: makeMetaTitle('Contact'),
    },
    {
      name: 'description',
      content: 'For any queries, issues, service assistance please contact us',
    },
  ];
};

const Contact = () => {
  return (
    <>
      <section className='my-20 mb-32 grid-cols-2 place-content-center gap-16 space-y-12 lg:grid lg:space-y-0'>
        <div className='flex flex-col items-start'>
          <h1 className='mb-4 text-4xl font-bold text-gray-800 dark:text-white sm:text-4xl'>
            Contact Us
          </h1>
          <p className='text-lg leading-relaxed text-gray-900 dark:text-gray-300'>
            At EvolveDev, we&apos;re always here to help. Whether you have a question, need
            assistance, or just want to say hello, we&apos;d love to hear from you.
            <br />
            <br />
            Our dedicated team is committed to providing exceptional support and service.
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className='flex w-full max-w-md flex-col gap-y-4 lg:ml-auto lg:gap-y-6'
        >
          <div className='space-y-2'>
            <Label>Name</Label>
            <Input
              className='border-[1.5px] border-black dark:border-white'
              type='text'
              placeholder='Enter your Name'
            />
          </div>
          <div className='space-y-2'>
            <Label>Email</Label>
            <Input
              type='email'
              placeholder='Enter Email'
              className='dark:border-whit border-[1.5px] border-black dark:border-white'
            />
          </div>
          <div className='space-y-2'>
            <Label>Name</Label>
            <textarea
              id='message'
              name='message'
              required
              placeholder='Enter your message'
              className='h-32 w-full resize-none rounded border-[1.5px] border-black bg-[#E5E7EB] px-3 py-1 text-base leading-6 text-gray-900 outline-none dark:border-white dark:bg-[#0A0A0A] dark:text-white'
            ></textarea>
          </div>

          <Button className='mt-3'>Send Message</Button>
        </form>
      </section>
    </>
  );
};

export default Contact;
