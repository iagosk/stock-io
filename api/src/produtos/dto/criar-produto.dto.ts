import { IsInt, IsEnum, IsString, MaxLength, MinLength, Min } from "class-validator";

import { TipoProduto } from "../produto.entity";

export class CriarProdutoDto {
  @IsString()
  @MinLength(5)
  @MaxLength(150)
  nome: string;

  @IsInt()
  @Min(0, {message: 'A quantidade mínima do produto deve ser 0.'})
  quantidade: number;

  @IsEnum(TipoProduto, {
    message: 'Tipo de produto inválido.',
  })
  tipo: TipoProduto; 
}