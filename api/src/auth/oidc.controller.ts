import { Controller, Get, Param, Query, Redirect, Req } from "@nestjs/common";
import { OidcService, Public } from "@nestjs/authentication";
import * as express from "express";

@Public()
@Controller('auth/oidc')
export class OidcController {
  constructor(private readonly oidcService: OidcService) { }

  @Get(':provider/login')
  @Redirect()
  login(
    @Param('provider') provider: string,
    @Query('redirectTo') redirectTo?: string,
    @Query('link') link?: string,
    @Req() request?: express.Request
  ) {
    return this.oidcService.start(provider, { redirectTo, link: link === 'true', request });
  }

  @Get(':provider/callback')
  @Redirect()
  async callback(
    @Param('provider') provider: string,
    @Query() query: Record<string, string>,
    @Req() request: express.Request
  ) {
    const redirect = await this.oidcService.finish(provider, query, { request });

    // Se o pacote devolver apenas '/' (rota padrão), forçamos o envio para o Vite
    if (!redirect?.url || redirect.url === '/') {
      return { url: 'http://localhost:5173/dashboard' };
    }

    return redirect;
  }
}