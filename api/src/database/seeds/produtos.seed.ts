import 'dotenv/config';
import dataSource from '../data-source';
import { Produto, StatusProduto, TipoProduto } from '../../produtos/produto.entity';

const dados = [
  {
    nome: "Creme de Açaí",
    quantidade: 3,
    tipo: TipoProduto.GELATERIA as const,
  },
  {
    nome: "Creme de Tapioca",
    quantidade: 4,
    tipo: TipoProduto.GELATERIA as const,
  },
  {
    nome: "Creme de Ninho",
    quantidade: 0,
    tipo: TipoProduto.GELATERIA as const,
  }
];

async function executar() {
  await dataSource.initialize();
  const repository = dataSource.getRepository(Produto);

  for(const item of dados) {
    const existente = await repository.findOneBy({ nome: item.nome });

    if(!existente) {
      await repository.save(
        repository.create({
          ...item,
        }),
      );
    }
  }

  await dataSource.destroy();
}

executar().catch(async (erro) => {
  console.error(erro);

  if(dataSource.isInitialized) {
    await dataSource.destroy();
  }

  process.exitCode = 1;
})