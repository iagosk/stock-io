// Importação do ZOD, biblioteca de validação.
import { z } from 'zod';

// Exportação do Schema elaborado para novos registros.
export const signUpSchema = z.object({
  email: z.email(),
  password: z.string().min(12).max(128),
});

// Exportação do DTO dedicado para o Schema de novos registros.
export type SignUpDto = z.infer<typeof signUpSchema>;

// Exportação do Schema elaborado para Login.
export const signInSchema = z.object({
  email: z.email(),
  password: z.string(),
});

// Exportação do DTO dedicado para o Schema de login.
export type SignInDto = z.infer<typeof signInSchema>;
