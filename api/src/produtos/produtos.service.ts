import { Injectable, NotFoundException } from '@nestjs/common';

type StatusProduto = 'Esgotado' | 'Em estoque';
type TipoProduto = 'Gelateria' | 'Cozinha' | 'Bebidas' | 'Outros';
type Produto = {
  id: number;
  nome: string;
  quantidade: number;
  tipo: TipoProduto;
  status: StatusProduto;
};

@Injectable()
export class ProdutosService {
  constructor() {}
  private readonly produtos: Produto[] = [
    { id: 1, nome: 'Açaí', quantidade: 1, tipo: 'Gelateria', status: 'Em estoque' },
    { id: 2, nome: 'Creme de Tapioca', quantidade: 0, tipo: 'Gelateria', status: 'Em estoque' },
  ];

  atualizarStatus() {
    this.produtos.forEach((produto) => {
      if (produto.quantidade === 0) {
        produto.status = 'Esgotado'
      }
    });
  }

  buscarPorId(id: number) {
    this.atualizarStatus();
    const produtoEncontrado = this.produtos.find((produto) => produto.id === id);

    if (!produtoEncontrado) {
      throw new NotFoundException('Produto não encontrado!');
    }

    return produtoEncontrado;
  }

  atualizarQuantidade(id: number, quant: number) {
    const produto = this.buscarPorId(id);
    produto.quantidade = quant;
    return `Quantidade do produto: ${produto.nome} atualizada para: ${produto.quantidade}!`;
  }

  listarProdutos() {
    this.atualizarStatus();
    return this.produtos;
  }
}

