import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from "typeorm";
import { CriarProdutoDto } from './dto/criar-produto.dto';
import { Produto } from './produto.entity';
import { FiltrarProdutoDto } from './dto/FiltrarProduto.dto';

import { StatusProduto } from './produto.entity';
import { TipoProduto } from './produto.entity';
import { QueueAction } from 'rxjs/internal/scheduler/QueueAction';
import { AtualizarProdutoDto } from './dto/atualizar-produto.dto';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private readonly repository: Repository<Produto>,
  ) { }

  listarProdutos(filtros: FiltrarProdutoDto) {
    this.atualizarStatus();
    const where: FindOptionsWhere<Produto> = {};

    if (filtros.nome) {
      where.nome = filtros.nome;
    }

    if (filtros.status) {
      where.status = filtros.status;
    }

    if (filtros.tipo) {
      where.tipo = filtros.tipo;
    }

    return this.repository.find({
      where,
      order: { id: 'ASC' },
    });
  }

  atualizarStatus() {
    // console.log(typeof(this.repository))
  }

  async buscarPorId(id: number) {
    this.atualizarStatus();
    const produto = await this.repository.findOneBy({ id });

    if (!produto) {
      throw new NotFoundException("Produto não encontrado");
    }

    return produto;
  }

  async atualizarProduto(
    id: number,
    dados: AtualizarProdutoDto,
  ) {
    const produto: Produto = await this.buscarPorId(id);

    const produtoAtualizado = { ...produto, ...dados }
  
    if (produtoAtualizado.quantidade > 0) {
      produtoAtualizado.status = StatusProduto.EM_ESTOQUE;
    }

    this.repository.save(produtoAtualizado);
    return produtoAtualizado;
  }

  registrarProduto(dto: CriarProdutoDto) {
    const produto = this.repository.create({
      nome: dto.nome,
      quantidade: dto.quantidade,
      tipo: dto.tipo,
    });

    if (produto.quantidade > 0) {
      produto.status = StatusProduto.EM_ESTOQUE;
    }

    return this.repository.save(produto);
  }

  async deletarProduto(id: number) {
    const produto = this.buscarPorId(id);

    if (!produto) {
      throw new NotFoundException(`Produto não encontrado.`);
    }

    // this.repository.remove(produto);
  }

}

