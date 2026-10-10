
import { Injectable } from '@nestjs/common';
import { AuthenticationRegistry, SessionCookieProvider, type SessionRecord } from '@nestjs/authentication';
import type { Usuario } from '../usuarios/usuarios.service';
import { UsuariosRepository } from '../usuarios/usuarios.repository';

@Injectable()
export class SessionAuth extends SessionCookieProvider<Usuario> {
  constructor(
    private readonly usersRepository: UsuariosRepository,
    registry: AuthenticationRegistry,
  ) {
    super();
    // Adiciona este provedor à cadeia que o guard executa para cada requisição.
    registry.registerProvider(this);
  }

  // Chamado para cada requisição com um cookie de sessão ativa.
  // Retornar null (o usuário foi excluído) encerra a sessão.
  validate(session: SessionRecord) {
    return this.usersRepository.findById(session.userId);
  }
}
