import {
  Column,
  Check,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

export enum StatusProduto {
  ESGOTADO = 'Esgotado',
  EM_ESTOQUE = 'Em estoque',
};
export enum TipoProduto {
  GELATERIA = 'Gelateria',
  COZINHA = 'Cozinha',
  BEBIDAS = 'Bebidas',
  OUTROS = 'Outros'
};

@Entity({ name: 'produtos' })
@Check(`"quantidade" >= 0`)
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type:'varchar', length: 150 })
  nome: string;

  @Column({ type: 'int', default: 0})
  quantidade: number;

  @Column({ type:'enum', enum: TipoProduto})
  tipo: TipoProduto;

  @Column({ type: 'enum', enum: StatusProduto, default: StatusProduto.ESGOTADO })
  status: StatusProduto;

  @VersionColumn({ name: 'versao' })
  versao: number;

  @CreateDateColumn({ name: 'criada_em', type: 'timestamptz' })
  criadaEm: Date;

  @UpdateDateColumn({ name: 'atualizada_em', type: 'timestamptz' })
  atualizadaEm: Date;
}