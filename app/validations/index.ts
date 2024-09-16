import { z } from 'zod';

export const emailSchema = z.string().email({ message: 'Invalid Email' }).min(4);

export const subscriptionSchema = z.object({ email: emailSchema });

export const contactSchema = z.object({
  name: z.string().min(2, { message: 'Atleast 2 characters required' }),
  email: emailSchema,
  message: z.string().min(10, { message: 'Atleast 10 characters required' }),
});

export type Contact = z.infer<typeof contactSchema>;
export type Subscription = z.infer<typeof subscriptionSchema>;
