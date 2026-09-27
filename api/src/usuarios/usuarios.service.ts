import { Injectable } from "@nestjs/common";

export type Cargo = 'colaborador' | 'gerente';

export type Usuario = {
  id: number;
  nome: string;
  email: string;
  senha: string;
  cargo: Cargo;
  ativo: boolean;
};

@Injectable()
export class UsuariosService {
  private readonly usuarios: Usuario[] = [
    { id: 1, nome: 'Matheus Iago', email: 'matheusiago083@gmail.com',senha: '123456', cargo: 'colaborador', ativo: true },
    { id: 2, nome: 'Gleison Ruan', email: 'ruan@email.com', senha: '123456', cargo: 'gerente', ativo: true },
    { id: 3, nome: 'Josenildo Pinheiro', email: 'josenildo@email.com', senha: '123456', cargo: 'gerente', ativo: true },
  ];

  // Método para buscar de usuário por email.
  buscarPorEmail(email: string, senha: string) {
    return this.usuarios.find((usuario) => usuario.email === email);
  }
}