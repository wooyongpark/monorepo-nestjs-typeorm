import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@app/entity/domain/user/User.entity';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { UserApiModule } from '../../api/src/user/UserApiModule';
import { Group } from '@app/entity/domain/group/Group.entity';
import { UserAdminModule } from './user/UserAdminModule';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'mywork',
      entities: [User, Group],
      synchronize: false,
      autoLoadEntities: true,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    UserAdminModule,
  ],
})
export class AdminAppModule {}
