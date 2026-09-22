import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Enter your name (at least 2 characters)."),
  email: z.string().email("Enter a valid email address, like name@example.com."),
  message: z.string().min(10, "Write a message of at least 10 characters."),
  company: z.string().max(0).optional(), // honeypot: must stay empty
});

export type ContactInput = z.infer<typeof contactSchema>;