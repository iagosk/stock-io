import { Injectable } from "@nestjs/common";

export type Cargo = 'colaborador' | 'gerente' | 'administrador';

export interface Usuario {
  id: string;
  email: string;
  /** Whether the owner proved the address to us, e.g. by using a magic link. */
  emailVerified: boolean;
  roles: Cargo[];
}

@Injectable()
export class UsuariosService {  }