import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { type Contact, contactSchema, Subscription, subscriptionSchema } from '~/validations';
import { APIPrefix } from '~/config/api-utils';

import { toast } from 'sonner';

const URL =
  (!import.meta.env.PROD ? 'http://localhost:8087' : 'https://communication.evolveasdev.com') +
  APIPrefix;

export const useContact = () => {
  const form = useForm<Contact>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const mutationResult = useMutation({
    mutationFn: async (payload: Contact) => {
      const data = await axios.post(`${URL}/contact/create`, payload);
      return data;
    },
    onSuccess: () => {
      toast.success('Message Sent');
      form.reset();
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        return toast.error(err.response?.data?.errorMsg || 'Something went wrong');
      }
      return toast.error('Something went wrong');
    },
  });

  return [form, mutationResult] as const;
};

export const useSubscription = () => {
  const form = useForm<Subscription>({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: {
      email: '',
    },
  });

  const mutationResult = useMutation({
    mutationFn: async (payload: Subscription) => {
      const data = await axios.post(`${URL}/email/create`, payload);
      return data;
    },
    onSuccess: () => {
      toast.success('Success');
      form.reset();
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        return toast.error(err.response?.data?.errorMsg || 'Something went wrong');
      }
      return toast.error('Something went wrong');
    },
  });

  return [form, mutationResult] as const;
};
