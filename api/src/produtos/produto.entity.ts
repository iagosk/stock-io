import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

export type StatusProduto = 'Esgotado' | 'Em estoque';
export type TipoProduto = 'Gelateria' | 'Cozinha' | 'Bebidas' | 'Outros';

@Entity({ name: 'produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type:'varchar', length: 150 })
  nome: string;

  @Column({ type: 'integer', default: 0 })
  quantidade: number;

  @Column({ type:'varchar', length: 150 })
  tipo: TipoProduto;

  @Column({ type: 'varchar', length: 150, default: 'Esgotado' })
  status: StatusProduto;

  @VersionColumn({ name: 'versao' })
  versao: number;

  @CreateDateColumn({ name: 'criada_em', type: 'timestamptz' })
  criadaEm: Date;

  @UpdateDateColumn({ name: 'atualizada_em', type: 'timestamptz' })
  atualizadaEm: Date;
}