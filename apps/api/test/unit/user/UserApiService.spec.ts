import { Repository } from 'typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { UserModule } from '@app/entity/domain/user/UserModule';
import { UserApiService } from '../../../src/user/UserApiService';
import { User } from '@app/entity/domain/user/User.entity';
import { getPgTestTypeOrmModule } from '../../../../../libs/entity/test/getPgTestTypeOrmModule';
import { UserApiQueryRepository } from '../../../src/user/UserApiQueryRepository';

describe('UserApiService', () => {
  let userRepository: Repository<User>;
  let userApiService: UserApiService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UserModule, getPgTestTypeOrmModule()],
      providers: [UserApiService, UserApiQueryRepository],
    }).compile();

    userRepository = module.get('UserRepository');
    userApiService = module.get<UserApiService>(UserApiService);
  });

  beforeEach(async () => {
    await userRepository.clear();
  });

  it('findAll', async () => {
    //given
    const firstName = 'Lee';
    const lastName = 'Donguk';
    await userRepository.save(User.byName(firstName, lastName));

    const users = await userApiService.findAll();
    expect(users).toHaveLength(1);
    expect(users[0].firstName).toBe(firstName);
    expect(users[0].lastName).toBe(lastName);
  });

  it('findUserName', async () => {
    //given
    const firstName = 'Lee';
    const lastName = 'Donguk';
    const user = await userRepository.save(User.byName(firstName, lastName));

    const userName = await userApiService.findUserName(user.id);
    expect(userName.firstName).toBe(firstName);
    expect(userName.lastName).toBe(lastName);
  });
});
