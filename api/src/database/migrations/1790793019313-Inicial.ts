import { MigrationInterface, QueryRunner } from "typeorm";

export class Inicial1790793019313 implements MigrationInterface {
    name = 'Inicial1790793019313'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."produtos_tipo_enum" AS ENUM('Gelateria', 'Cozinha', 'Bebidas', 'Outros')`);
        await queryRunner.query(`CREATE TYPE "public"."produtos_status_enum" AS ENUM('Esgotado', 'Em estoque')`);
        await queryRunner.query(`CREATE TABLE "produtos" ("id" SERIAL NOT NULL, "nome" character varying(150) NOT NULL, "quantidade" integer NOT NULL DEFAULT '0', "tipo" "public"."produtos_tipo_enum" NOT NULL, "status" "public"."produtos_status_enum" NOT NULL DEFAULT 'Esgotado', "versao" integer NOT NULL, "criada_em" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "atualizada_em" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "CHK_0a95f31fd0d2bbd0afc7aaf6ce" CHECK ("quantidade" >= 0), CONSTRAINT "PK_a5d976312809192261ed96174f3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "auditorias" ("id" SERIAL NOT NULL, "ator_id" integer NOT NULL, "acao" character varying(50) NOT NULL, "recurso_tipo" character varying(50) NOT NULL, "recurso_id" integer NOT NULL, "detalhes" jsonb, "criada_em" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_b84b3505f313ab1a44e7b684ee2" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "auditorias"`);
        await queryRunner.query(`DROP TABLE "produtos"`);
        await queryRunner.query(`DROP TYPE "public"."produtos_status_enum"`);
        await queryRunner.query(`DROP TYPE "public"."produtos_tipo_enum"`);
    }

}
