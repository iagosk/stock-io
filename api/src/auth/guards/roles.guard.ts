import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Cargo } from "../../usuarios/usuarios.service";
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const cargosExigidos = this.reflector.getAllAndOverride<Cargo[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if(!cargosExigidos?.length) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    return cargosExigidos.includes(request.user?.cargo);
  }
}