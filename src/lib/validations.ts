import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name cannot exceed 80 characters"),
  email: z
    .string()
    .email("Please provide a valid email address (e.g. name@company.com)"),
  company: z.string().max(100, "Company name cannot exceed 100 characters").optional().default(""),
  budget: z.string().min(1, "Please select an estimated budget range"),
  service: z.string().min(1, "Please select a service category"),
  message: z
    .string()
    .min(10, "Project description must be at least 10 characters")
    .max(2000, "Message cannot exceed 2000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Please provide a valid email address"),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
