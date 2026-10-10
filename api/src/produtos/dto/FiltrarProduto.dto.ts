import { IsEnum, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

import type { StatusProduto } from '../produto.entity';
import type { TipoProduto } from "../produto.entity";

export class FiltrarProdutoDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsEnum(['Gelateria', 'Cozinha', 'Bebidas', 'Outros'], {
    message: 'Tipo de produto inválido',
  })
  tipo?: TipoProduto;
  
  @IsOptional()
  @IsEnum(['Esgotado', 'Em estoque'], {
    message: 'Status de produto inválido',
  })
  status?: StatusProduto;
}