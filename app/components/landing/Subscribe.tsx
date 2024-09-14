import { MailCheckIcon } from 'lucide-react';
import { useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

function Subscribe() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(email);
  };

  return (
    <div className='flex items-center justify-center'>
      <form
        onSubmit={handleSubscribe}
        className='mx-auto flex w-full flex-col space-y-7 rounded-lg border p-10 py-8 shadow-lg dark:shadow-gray-800 lg:w-[80%]'
      >
        <p className='text-xl font-bold'>Latest update in your inbox</p>
        <Label className='text-base font-medium' htmlFor='email'>
          Join our EvolveDev community and stay ahead of the curve! Get the latest insights,
          tutorials, and trends in programing world delivered straight to your inbox! Don&apos;t
          worry no spam 👍.
        </Label>

        <div className='flex items-center justify-center gap-4'>
          <MailCheckIcon className='h-7 w-7' />
          <Input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email here'
            className='h-8'
          />
        </div>

        <Button type='submit'>Subscribe</Button>
      </form>
    </div>
  );
}

export default Subscribe;
