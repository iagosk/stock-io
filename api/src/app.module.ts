import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProdutosController } from './produtos/produtos.controller';
import { ProdutosModule } from './produtos/produtos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthenticationModule } from '@nestjs/authentication';
import { FileTemplateEngine, LogMailTransport, MailModule, SmtpTransport } from '@nestjs/mail';
import { join } from 'node:path';

@Module({
  imports: [
    MailModule.forRootAsync({
      useFactory: () => ({
        // Your provider in production. In development, each email (links
        // included) is printed to the log.
        transport: process.env.SMTP_URL ? new SmtpTransport({ url: process.env.SMTP_URL }) : new LogMailTransport(),
        // The emails' HTML: the templates in mail/templates, next to this file
        templates: new FileTemplateEngine({ dir: join(__dirname, 'mail/templates') }),
        from: 'Accounts <accounts@example.com>',
      }),
    }),
    AuthenticationModule.forRootAsync({
      useFactory: () => ({
        session: {
          absoluteTtl: '14d',
          idleTtl: '3d',
        },
        emailVerification: { url: `${process.env.APP_URL}/auth/email/verify ` },
      }),
    }),
    UsuariosModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    // TypeOrmModule.forRootAsync({
    //   inject: [ConfigService],
    //   useFactory: (config: ConfigService) => ({
    //     type: 'postgres',
    //     host: config.getOrThrow<string>('DB_HOST'),
    //     port: Number(config.get('DB_PORT') ?? 5432),
    //     database: config.getOrThrow<string>('DB_NAME'),
    //     username: config.getOrThrow<string>('DB_USER'),
    //     password: config.getOrThrow<string>('DB_PASSWORD'),
    //     autoLoadEntities: true,
    //     synchronize: false,
    //     migrations: [__dirname + '/database/migrations/*{.ts,.js}'],
    //     migrationsRun: true,
    //   }),
    // }),
    // ProdutosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
