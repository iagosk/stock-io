import { Injectable } from "@nestjs/common";

export type Cargo = 'colaborador' | 'gerente';

export type Usuario = {
  id: number;
  nome: string;
  email: string;
  senhaHash: string;
  cargo: Cargo;
  ativo: boolean;
};

export type UsuarioAutenticado = Omit<Usuario, 'senhaHash'>;

@Injectable()
export class UsuariosService {
  private readonly usuarios: Usuario[] = [
    { id: 1, nome: 'Matheus Iago', email: 'matheusiago083@gmail.com', senhaHash: '$2b$12$9wSU322YwpUHxzAhikRZpOecaIxHFamXsjnZBMulA3dtK1pFuwYNO', cargo: 'colaborador', ativo: true },
    { id: 2, nome: 'Gleison Ruan', email: 'ruan@email.com', senhaHash: '$2b$12$9wSU322YwpUHxzAhikRZpOecaIxHFamXsjnZBMulA3dtK1pFuwYNO', cargo: 'gerente', ativo: true },
    { id: 3, nome: 'Josenildo Pinheiro', email: 'josenildo@email.com', senhaHash: '$2b$12$9wSU322YwpUHxzAhikRZpOecaIxHFamXsjnZBMulA3dtK1pFuwYNO', cargo: 'gerente', ativo: true },
  ];

  // Método para buscar de usuário por email.
  buscarPorEmail(email: string) {
    return this.usuarios.find((usuario) => usuario.email === email);
  }
}