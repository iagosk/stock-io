import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { UsuariosModule } from "../usuarios/usuarios.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { LocalStrategy } from "./strategies/strategy";

@Module({
  imports: [
    UsuariosModule,
    PassportModule.register({ defaultStrategy: 'local' }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, LocalAuthGuard],
})
export class AuthModule {}