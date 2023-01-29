import { Factory, Faker } from '@mikro-orm/seeder';

import { User } from '../entities/User';

export class UserFactory extends Factory<User> {
  model = User;

  definition(faker: Faker): Partial<User> {
    return {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      address: faker.address.city(),
      postCode: faker.address.countryCode(),
      phoneNumber: faker.phone.number(),
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password: faker.internet.password()
    };
  }
}
