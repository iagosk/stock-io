import { Module } from "@nestjs/common";
import { UsuariosModule } from "../usuarios/usuarios.module";
import { AuthController } from "./auth.controller";
import { SessionAuth } from "./session-auth.provider";
import { CredentialsService } from "./credentials.service";
import { EmailVerificationMailer } from "./emailVerification/email-verification.mailer";
import { EmailVerificationController } from "./emailVerification/email-verification.controller";

@Module({
  imports: [UsuariosModule],
  controllers: [
    AuthController,
    EmailVerificationController,
  ],
  providers: [
    SessionAuth,
    CredentialsService,
    EmailVerificationMailer,
  ],
})
export class AuthModule { } 