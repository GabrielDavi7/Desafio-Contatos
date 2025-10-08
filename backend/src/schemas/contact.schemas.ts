import { email, z } from "zod";

// para criar um contact os dados precisa ter :
export const ContactCreateSchemas = z.object({
  //Campos: `id`, `name`, `email`, `phone`, `createdAt`, `updatedAt`.
  name: z.string().min(3, "O nome deve possuir no minimo 3 caractere."),
  email: z.string().email("O email inserido e invalido."),
  phone: z.string().optional(),
});
