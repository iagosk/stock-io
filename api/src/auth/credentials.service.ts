
import { ConflictException, Injectable } from '@nestjs/common';
import { PasswordHasher } from '@nestjs/authentication';
import type { Usuario } from '../usuarios/usuarios.service';
import { UsuariosRepository } from '../usuarios/usuarios.repository';

@Injectable()
export class CredentialsService {
  constructor(
    private readonly usersRepository: UsuariosRepository,
    private readonly passwordHasher: PasswordHasher,
  ) { }

  async register(email: string, password: string): Promise<Usuario> {
    if (await this.usersRepository.findByEmail(email)) {
      throw new ConflictException('Email já registrado');
    }
    // Endereço não é verificado: qualquer pessoa pode digitar qualquer e-mail em um formulário de cadastro.
    return this.usersRepository.create(email, { passwordHash: await this.passwordHasher.hash(password) });
  }

  /** Verificação que retorna o usuário, ou 'null' caso o e-mail ou a senha estejam incorretos. */
  async verify(email: string, password: string): Promise<Usuario | null> {
    const found = await this.usersRepository.findCredentials(email);
    // Sem uma conta (ou sem senha), o verify() verifica um hash fictício, de modo que
    // o tempo de resposta não revele quais e-mails estão registrados.
    const valid = await this.passwordHasher.verify(password, found?.passwordHash);
    if (!valid || !found?.passwordHash) {
      return null;
    }
    // Atualização do Hash da senha.
    if (this.passwordHasher.needsRehash(found.passwordHash)) {
      await this.usersRepository.updatePasswordHash(found.user.id, await this.passwordHasher.hash(password));
    }
    return found.user;
  }
}
