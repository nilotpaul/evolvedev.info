import { MailCheckIcon } from 'lucide-react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { useSubscription } from '~/hooks/useCommunication';

function Subscribe() {
  const [form, mutation] = useSubscription();

  return (
    <div className='flex items-center justify-center'>
      <form
        onSubmit={form.handleSubmit((v) => mutation.mutate(v))}
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
            {...form.register('email')}
            placeholder='Enter your email here'
            className='h-8'
          />
        </div>

        <Button isLoading={mutation.isPending} type='submit'>
          Subscribe
        </Button>
      </form>
    </div>
  );
}

export default Subscribe;
