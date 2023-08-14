import * as z from 'zod';

export const ThreadValidation = z.object({
  thread: z.string().nonempty().min(3, { message: 'Minimum 3 caractères' }),
  accountId: z.string().min(3, { message: 'Minimum 3 caractères' }).max(30),
});

export const CommentValidation = z.object({
  thread: z.string().nonempty().min(3, { message: 'Minimum 3 caractères' }),
});
