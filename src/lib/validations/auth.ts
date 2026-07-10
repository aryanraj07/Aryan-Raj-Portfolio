import { z } from "zod";

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
});
export type LoginInput = z.input<typeof loginSchema>;

export const registerSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
});
