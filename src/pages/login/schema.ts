import * as zod from 'zod';

export const LoginSchema = zod.object({
  username: zod.string().trim().min(1, { message: 'Username is required' }),
});

export type LoginSchemaType = zod.infer<typeof LoginSchema>;
