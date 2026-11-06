import { Module } from "@nestjs/common";
import { UsuariosRepository } from "./usuarios.repository";
import { MeController } from "./me.controller";

@Module({
  controllers: [MeController],
  providers: [UsuariosRepository],
  exports: [UsuariosRepository],
})
export class UsuariosModule {};