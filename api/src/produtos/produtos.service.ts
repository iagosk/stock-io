import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository, DataSource } from "typeorm";
import { CriarProdutoDto } from './dto/criar-produto.dto';
import { Produto } from './produto.entity';
import { FiltrarProdutoDto } from './dto/FiltrarProduto.dto';
import { StatusProduto } from './produto.entity';
import { TipoProduto } from './produto.entity';

import { AtualizarProdutoDto } from './dto/atualizar-produto.dto';
import { Auditoria } from '../auditoria/auditoria.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private readonly repository: Repository<Produto>,
    private readonly dataSource: DataSource,
  ) { }

  listarProdutos(filtros: FiltrarProdutoDto) {
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

  async buscarPorId(id: number) {
    const produto = await this.repository.findOneBy({ id });

    if (!produto) {
      throw new NotFoundException("Produto não encontrado");
    }

    return produto;
  }

  async atualizarProduto(
    id: number,
    versaoEsperada: number,
    atorId: number,
    dados: AtualizarProdutoDto,
  ) {
    return this.dataSource.transaction(async (manager: any) => {
      const produto: Produto = await manager.findOneBy(Produto, { id });

      if (!produto) {
        throw new ConflictException('Produto não encontrado!');
      }

      const produtoAtualizado = { ...produto, ...dados }
      const resultado = await manager
        .createQueryBuilder()
        .update(Produto)
        .set({ status: produtoAtualizado.quantidade <= 0 ? StatusProduto.ESGOTADO : StatusProduto.EM_ESTOQUE, versao: () => 'versao + 1' })
        .where('id = :id', { id })
        .andWhere('versao = :versao', { versao: versaoEsperada })
        .execute();

      if (resultado.affected !== 1) {
        throw new ConflictException(
          'O produto foi alterado, consulte novamente.',
        );
      }

      await manager.insert(Auditoria, {
        atorId,
        acao: 'Atualização do produto',
        recursoTipo: 'produto',
        recursoId: id,
      });

      return manager.findOneByOrFail(Produto, { id });
    });
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
    const produto = await this.buscarPorId(id);

    if (!produto) {
      throw new NotFoundException(`Produto não encontrado.`);
    }

    this.repository.remove(produto);
  }

}

