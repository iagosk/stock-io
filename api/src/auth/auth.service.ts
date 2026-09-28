import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import {
  UsuarioAutenticado,
  UsuariosService
} from '../usuarios/usuarios.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly jwtService: JwtService,
  ) { }

  async validarUsuario(email: string, senhaHash: string) {
    const usuario = this.usuariosService.buscarPorEmail(email);

    if (!usuario || !usuario.ativo) {
      return null;
    }
    
    const senhaValida = await bcrypt.compare(senhaHash, usuario.senhaHash);

    if(!senhaValida) {
      return null;
    }

    const { senhaHash: _senha, ...dados } = usuario;
    return dados;
  }

  login(usuario: UsuarioAutenticado) {
    const payload = {
      sub: usuario.id,
      email: usuario.email,
      cargo: usuario.cargo,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}