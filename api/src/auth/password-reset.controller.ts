import { BadRequestException, Body, Controller, HttpCode, Post } from "@nestjs/common";
import { PasswordResetService, Public } from "@nestjs/authentication";
import { emailSchema, resetPasswordSchema, type EmailDto, type ResetPasswordDto } from "./auth.schemas";

@Public()
@Controller('auth/password')
export class PasswordResetController {
  constructor(private readonly passwordResetService: PasswordResetService) { }
  
  @Post('forgot')
  @HttpCode(202)
  forgot(@Body({ schema: emailSchema }) body: EmailDto) {
    this.passwordResetService.request(body.email);
  }

  @Post('reset')
  @HttpCode(200)
  async reset(@Body({ schema: resetPasswordSchema }) body: ResetPasswordDto) {
    const result = await this.passwordResetService.reset(body.token, body.password, { signIn: true });

    if (!result) {
      throw new BadRequestException('Invalid or expired link');
    }

    return { mfaRequired: result.signedIn?.session.mfa === 'pending' };
  }
}
