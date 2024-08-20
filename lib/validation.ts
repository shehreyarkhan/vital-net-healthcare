import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(5, "Username must be at least 5 characters.")
    .max(15, "Username must be at most 15 characters."),
  email: z.string().email("Invalid email address."),
  phone: z
    .string()
    .refine(
      (phone) => /^\+?[1-9]\d{1,14}$/.test(phone),
      "Invalid phone number."
    ),
});
