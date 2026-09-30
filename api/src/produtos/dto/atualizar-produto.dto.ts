import { IsEnum, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { TipoProduto } from '../produto.entity';
import { Type } from 'class-transformer';

export class AtualizarProdutoDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0, { message: 'A quantidade mínima do produto deve ser 0.' })
  quantidade?: number;

  @IsOptional()
  @IsEnum(TipoProduto, {
    message: 'Tipo de produto inválido.',
  })
  tipo?: TipoProduto;
}