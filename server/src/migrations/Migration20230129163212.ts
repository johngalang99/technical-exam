import { Migration } from '@mikro-orm/migrations';

export class Migration20230129163212 extends Migration {

  async up(): Promise<void> {
    this.addSql('drop table if exists "post" cascade;');

    this.addSql('alter table "user" add column "first_name" text not null, add column "last_name" text not null, add column "address" text not null, add column "post_code" text not null, add column "phone_number" text not null, add column "email" text not null;');
    this.addSql('alter table "user" add constraint "user_phone_number_unique" unique ("phone_number");');
    this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');
  }

  async down(): Promise<void> {
    this.addSql('create table "post" ("id" serial primary key, "created_at" timestamptz not null default null, "updated_at" timestamptz not null default null, "title" text not null default null);');

    this.addSql('alter table "user" drop constraint "user_phone_number_unique";');
    this.addSql('alter table "user" drop constraint "user_email_unique";');
    this.addSql('alter table "user" drop column "first_name";');
    this.addSql('alter table "user" drop column "last_name";');
    this.addSql('alter table "user" drop column "address";');
    this.addSql('alter table "user" drop column "post_code";');
    this.addSql('alter table "user" drop column "phone_number";');
    this.addSql('alter table "user" drop column "email";');
  }

}
