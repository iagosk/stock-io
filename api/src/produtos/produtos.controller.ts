import { Controller, Get, Patch, Param, ParseIntPipe, Body, UseGuards } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) { }

  @Get()
  listarProdutos() {
    return this.produtosService.listarProdutos();
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.produtosService.buscarPorId(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('colaborador', 'gerente')
  @Patch(':id/atualizar-quantidade')
  atualizarQuant(
    @Param('id', ParseIntPipe) id:number,
    @Body() body: {
      quantidade: number;
    },
  ) { 
    return this.produtosService.atualizarQuantidade(id, body.quantidade);
  }
}
