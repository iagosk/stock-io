import { Module } from "@nestjs/common";
import { UsuariosModule } from "../usuarios/usuarios.module";
import { AuthController } from "./auth.controller";
import { SessionAuth } from "./session-auth.provider";
import { CredentialsService } from "./credentials.service";
import { EmailVerificationMailer } from "./emailVerification/email-verification.mailer";
import { EmailVerificationController } from "./emailVerification/email-verification.controller";
import { PasswordResetMailer } from "./password-reset.mailer";
import { PasswordResetController } from "./password-reset.controller";
import { OidcController } from "./oidc.controller";
import { AccountLinker } from "./account-linker";

@Module({
  imports: [UsuariosModule],
  controllers: [
    AuthController,
    EmailVerificationController,
    PasswordResetController,
    OidcController,
  ],
  providers: [
    SessionAuth,
    CredentialsService,
    EmailVerificationMailer,
    PasswordResetMailer,
    AccountLinker,
  ],
})
export class AuthModule { } 