import { z } from "zod";

export const ContactCreateSchemas = z.object({
  name: z.string().min(3, "O nome deve possuir no minimo 3 caractere."),
  email: z.string().email("O email inserido é invalido."),
  phone: z.string().optional(),
});
