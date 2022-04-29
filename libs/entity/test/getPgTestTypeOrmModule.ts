import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import * as path from 'path';

export function getPgTestTypeOrmModule() {
  const logging = process.env.LOGGING;

  return TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'mywork',
    entities: [path.join(__dirname, '../src/domain/**/*.entity.ts')],
    synchronize: true,
    logging: logging === undefined ? true : Boolean(logging),
    namingStrategy: new SnakeNamingStrategy(),
  });
}
