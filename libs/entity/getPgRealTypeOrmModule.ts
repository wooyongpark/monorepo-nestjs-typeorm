import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import * as path from 'path';

export function getPgRealTypeOrmModule() {
  const entityPath = path.join(__dirname, 'src/domain/**/*.entity.ts');
  return TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'mywork',
    entities: [entityPath],
    autoLoadEntities: true,
    synchronize: false,
    logging: false,
    namingStrategy: new SnakeNamingStrategy(),
  });
}
