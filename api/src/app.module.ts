import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProdutosController } from './produtos/produtos.controller';
import { ProdutosModule } from './produtos/produtos.module';
import { ProdutosService } from './produtos/produtos.service';

@Module({
  imports: [AuthModule, ProdutosModule],
  controllers: [AppController, ProdutosController],
  providers: [AppService, ProdutosService],
})
export class AppModule {}
