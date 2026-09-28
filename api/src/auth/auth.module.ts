import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { UsuariosModule } from "../usuarios/usuarios.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { LocalStrategy } from "./strategies/strategy";
import { JwtModule } from "@nestjs/jwt";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { RolesGuard } from "./guards/roles.guard";

@Module({
  imports: [
    UsuariosModule,
    PassportModule.register({ defaultStrategy: 'local' }),
    JwtModule.registerAsync({
      useFactory: () => {
        const secret = process.env.JWT_SECRET;

        if (!secret) {
          throw new Error("JWT_SECRET não foi definido");
        }

        return {
          secret,
          signOptions: {
            expiresIn: Number(process.env.JWT_EXPIRES_IN_SECONDS ?? 900),
          },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, LocalAuthGuard, JwtStrategy, JwtAuthGuard, RolesGuard],
  exports: [PassportModule, JwtAuthGuard, RolesGuard],
})
export class AuthModule { } 