import { IsInt, IsString, MaxLength, MinLength } from "class-validator";

export class CriarProdutoDto {
  @IsString()
  @MinLength(5)
  @MaxLength(150)
  nome: string;

  @IsInt()
  @MinLength(0)
  @MaxLength(200)
  quantidade: number;
}