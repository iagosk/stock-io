import { Controller, Get } from "@nestjs/common";
import { CurrentUser } from "@nestjs/authentication";
import type { Usuario } from "./usuarios.service";

@Controller("me")
export class MeController {
  @Get()
  me(@CurrentUser() user: Usuario) {
    return user;
  }
}