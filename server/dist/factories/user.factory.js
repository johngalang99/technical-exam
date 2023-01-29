"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = void 0;
const seeder_1 = require("@mikro-orm/seeder");
const User_1 = require("../entities/User");
class UserFactory extends seeder_1.Factory {
    constructor() {
        super(...arguments);
        this.model = User_1.User;
    }
    definition(faker) {
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
exports.UserFactory = UserFactory;
//# sourceMappingURL=user.factory.js.map