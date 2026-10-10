import { Controller, Get, Post, Req, UseGuards, UnauthorizedException, HttpCode, Body } from "@nestjs/common";
import { EmailVerificationService, Public, SignInService } from '@nestjs/authentication';
import { CredentialsService } from './credentials.service.js';
import { signInSchema, signUpSchema, type SignInDto, type SignUpDto } from './auth.schemas.js';

@Public()
@Controller('auth')
export class AuthController {
  constructor(
      private readonly credentialsSerice: CredentialsService,
      private readonly singInService: SignInService,
      private readonly emailVerificationService: EmailVerificationService,
  ) {}

  @Post('sign-up')
  async signUp(@Body({ schema: signUpSchema }) body: SignUpDto) {
    const user = await this.credentialsSerice.register(body.email, body.password);
    await this.singInService.signIn(user.id, { method: 'password' });
    await this.emailVerificationService.send(user);
    return user;
  }

  @Post('sign-in')
  @HttpCode(200)
  async signIn(@Body({ schema: signInSchema }) body: SignInDto) {
    const user = await this.credentialsSerice.verify(body.email, body.password);
    
    if(!user) {
      throw new UnauthorizedException('Senha ou e-mail inválidos.');
    }

    const { session } = await this.singInService.signIn(user.id, { method: 'password' });
    return { mfaRequired: session.mfa === 'pending' }; 
  } 
}
