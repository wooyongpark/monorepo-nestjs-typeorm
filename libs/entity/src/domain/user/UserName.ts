import { Expose } from 'class-transformer';

export class UserName {
  @Expose({ name: 'user_first_name' })
  firstName: string;

  @Expose({ name: 'user_last_name' })
  lastName: string;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
