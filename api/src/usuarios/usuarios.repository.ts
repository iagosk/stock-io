
import { randomInt, randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import type { Usuario } from './usuarios.service';
import { max } from 'class-validator';

interface UserRow extends Usuario {
  passwordHash: string | null;
}

/**
  Repositório para persistir os dados para o banco.
 * Apenas objetos `User` saem desta classe: os hashes de senha permanecem nela, por motivos de segurança.
 */
@Injectable()
export class UsuariosRepository {
  private readonly rows = new Map<string, UserRow>();

  // Método de criação da linha que será preenchida com os dados do usuário.
  async create(
    email: string,
    { passwordHash = null, emailVerified = false }: { passwordHash?: string | null; emailVerified?: boolean } = {},
  ): Promise<Usuario> {
    const row: UserRow = { id: String(randomInt(0, 100)), email: normalize(email), emailVerified, roles: ['colaborador'], passwordHash };
    this.rows.set(row.id, row);
    return toUser(row);
  }

  // Método de buscar baseado no ID do usuário.
  async findById(id: string): Promise<Usuario | null> {
    const row = this.rows.get(id);
    return row ? toUser(row) : null;
  }

  // Método de buscar baseado no email do usuário.
  async findByEmail(email: string): Promise<Usuario | null> {
    const row = this.findRow(email);
    return row ? toUser(row) : null;
  }

  // Método de buscar por credenciais do usuário, apenas para login com senha.
  async findCredentials(email: string): Promise<{ user: Usuario; passwordHash: string | null } | null> {
    const row = this.findRow(email);
    return row ? { user: toUser(row), passwordHash: row.passwordHash } : null;
  }

  // Método para atualização da senha.
  async updatePasswordHash(id: string, passwordHash: string): Promise<void> {
    const row = this.rows.get(id);
    if (row) {
      row.passwordHash = passwordHash;
    }
  }

  // Método para atualização do Email.
  async updateEmail(id: string, email: string): Promise<Usuario | null> {
    const row = this.rows.get(id);
    if (!row) {
      return null;
    }
    row.email = normalize(email);
    row.emailVerified = false; // nobody has proven the new address yet
    return toUser(row);
  }

  /** Apenas se o `email` ainda for o endereço do usuário: um link enviado para um endereço antigo não comprova nada. */
  async markEmailVerified(id: string, email: string): Promise<boolean> {
    const row = this.rows.get(id);
    if (!row || row.email !== normalize(email)) {
      return false;
    }
    row.emailVerified = true;
    return true;
  }

  // Método para busca de uma linha baseado no email.
  private findRow(email: string) {
    const normalized = normalize(email);
    return [...this.rows.values()].find((row) => row.email === normalized);
  }
}

// As the package passes addresses to handlers: an accent typed as two code points matches the stored one.
const normalize = (email: string) => email.trim().normalize('NFC').toLowerCase();
const toUser = ({ id, email, emailVerified, roles }: UserRow): Usuario => ({ id, email, emailVerified, roles: [...roles] });
