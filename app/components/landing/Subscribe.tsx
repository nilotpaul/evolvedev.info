import { useState } from 'react';
import { IoIosMail } from 'react-icons/io';

function Subscribe() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    alert(`Subscribed with email: ${email}`);
    setEmail(''); // Clear the input field after subscribing
  };

  return (
    <div className='flex items-center justify-center'>
      <div className='flex w-full max-w-[900px] flex-col space-y-7 rounded-lg  border p-10 py-8 shadow-lg transition-colors hover:border-blue-500 dark:shadow-md dark:shadow-gray-800 sm:ml-28'>
        <p className='font-bold'>Latest update in your inbox</p>
        <label className='font-serif text-xl font-semibold ' htmlFor='email'>
          Join our EvolveDev community and stay ahead of the curve! Get the latest insights,
          tutorials, and trends in software development delivered straight to your inbox !
        </label>

        <div className='relative w-full'>
          <IoIosMail className='absolute left-3 top-1/2 -translate-y-1/2 transform text-black' />
          <input
            type='email'
            id='email'
            className='w-full border-b-2 bg-[#E5E7EB] p-2 pl-10 focus:border-black focus:outline-none focus:ring-0 dark:bg-white'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email here'
          />
        </div>

        <button
          onClick={handleSubscribe}
          className='mt-4 rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-white dark:text-black'
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Subscribe;
