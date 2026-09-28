import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { AuthModule } from '../auth/auth.module';
import { ProdutosController } from './produtos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './produto.entity';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([Produto])],
  controllers: [ProdutosController],
  providers: [ProdutosService],
  exports: [ProdutosService],
})
export class ProdutosModule {}
