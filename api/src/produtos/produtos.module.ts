import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { AuthModule } from '../auth/auth.module';
import { ProdutosController } from './produtos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './produto.entity';
import { Auditoria } from '../auditoria/auditoria.entity';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([Produto, Auditoria])
  ],
  controllers: [ProdutosController],
  providers: [ProdutosService],
  exports: [ProdutosService],
})
export class ProdutosModule {}
