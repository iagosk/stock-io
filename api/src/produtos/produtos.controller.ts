import { Controller, Get, Post, Patch, Param, ParseIntPipe, Body, UseGuards, Query, BadRequestException, Delete } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CriarProdutoDto } from './dto/criar-produto.dto';
import { FiltrarProdutoDto } from './dto/FiltrarProduto.dto';
import { StatusProduto, TipoProduto } from './produto.entity';
import { AtualizarProdutoDto } from './dto/atualizar-produto.dto';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  registrar(@Body() dto: CriarProdutoDto) {
    return this.produtosService.registrarProduto(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  listarProdutos(@Query() filtros: FiltrarProdutoDto) {
    return this.produtosService.listarProdutos(filtros);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.produtosService.buscarPorId(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('colaborador', 'gerente')
  @Patch(':id/atualizar-produto')
  atualizarProduto(
    @Param('id', ParseIntPipe) id:number,
    @Body() body: AtualizarProdutoDto,
  ) { 
    if (Object.keys(body).length === 0) {
      throw new BadRequestException('Corpo da requisição não pode ser vazio');
    }

    return this.produtosService.atualizarProduto(id, body);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('gerente')
  @Delete(':id')
  deletarProduto(id: number) {
    return this.produtosService.deletarProduto(id);
  }
}
