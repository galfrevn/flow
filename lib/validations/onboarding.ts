import * as z from 'zod';

export const onboardingSchema = z.object({
  username: z
    .string()
    .min(3, 'Your username must have at least 3 characters ')
    .max(20, 'Your username not have more than 20 characters')
    .regex(
      /^(?![_ \.-])(?!.*[_ \.-]$)[a-z0-9_ \.-]{1,19}$/,
      'Your username has invalid characters'
    ),
  name: z
    .string()
    .min(3, 'Your full name must have at least 3 characters ')
    .max(60, 'Your full must not have more than 60 characters'),
  about: z
    .string()
    .max(230, 'Your about description must not have more than 230 characters')
    .optional(),
});

export type OnboardingSchema = z.infer<typeof onboardingSchema>;
