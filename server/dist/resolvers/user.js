"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const type_graphql_1 = require("type-graphql");
const User_1 = require("../entities/User");
const user_factory_1 = require("../factories/user.factory");
let UserResolver = class UserResolver {
    async createUser({ em }) {
        const user = new user_factory_1.UserFactory(em).makeOne();
        await em.persistAndFlush(user);
        return user;
    }
    Users({ em }) {
        return em.find(User_1.User, {});
    }
    User(id, { em }) {
        return em.findOne(User_1.User, { id });
    }
    async updateUser(id, firstName, lastName, address, postCode, phoneNumber, email, username, { em }) {
        const user = await em.findOne(User_1.User, { id });
        if (!user) {
            return null;
        }
        if (typeof firstName !== 'undefined')
            user.firstName = firstName;
        if (typeof lastName !== 'undefined')
            user.lastName = lastName;
        if (typeof address !== 'undefined')
            user.address = address;
        if (typeof postCode !== 'undefined')
            user.postCode = postCode;
        if (typeof phoneNumber !== 'undefined')
            user.phoneNumber = phoneNumber;
        if (typeof email !== 'undefined')
            user.email = email;
        if (typeof username !== 'undefined')
            user.username = username;
        await em.persistAndFlush(user);
        return user;
    }
    async deleteUser(id, { em }) {
        await em.nativeDelete(User_1.User, { id });
        return true;
    }
    async deleteUsers({ em }) {
        await em.nativeDelete(User_1.User, {});
        return true;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => User_1.User),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
__decorate([
    (0, type_graphql_1.Query)(() => [User_1.User]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "Users", null);
__decorate([
    (0, type_graphql_1.Query)(() => User_1.User, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "User", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => User_1.User, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __param(1, (0, type_graphql_1.Arg)('firstName', { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)('lastName', { nullable: true })),
    __param(3, (0, type_graphql_1.Arg)('address', { nullable: true })),
    __param(4, (0, type_graphql_1.Arg)('postCode', { nullable: true })),
    __param(5, (0, type_graphql_1.Arg)('phoneNumber', { nullable: true })),
    __param(6, (0, type_graphql_1.Arg)('email', { nullable: true })),
    __param(7, (0, type_graphql_1.Arg)('username', { nullable: true })),
    __param(8, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String, String, String, String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUsers", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.js.map