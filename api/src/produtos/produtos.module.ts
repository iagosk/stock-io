import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { AuthModule } from '../auth/auth.module';
import { ProdutosController } from './produtos.controller';

@Module({
  imports: [AuthModule],
  controllers: [ProdutosController],
  providers: [ProdutosService],
  exports: [ProdutosService],
})
export class ProdutosModule {}
