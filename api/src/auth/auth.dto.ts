
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

// Classe de DTO para registro de um novo usuário.
export class SignUpDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(12)
  @MaxLength(128)
  password: string;
}

// Class de DTO para login de um usuário já existente.
export class SignInDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
