import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';

import { User } from '../entities/User';
import { UserFactory } from '../factories/user.factory';
import { MyContext } from '../types';

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async createUser(
    @Ctx() { em }: MyContext): Promise<User> {
    const user = new UserFactory(em).makeOne()
    await em.persistAndFlush(user)
    return user
  }

  @Query(() => [User])
  Users(@Ctx() { em }: MyContext): Promise<User[]> {
    return em.find(User, {})
  }

  @Query(() => User, { nullable: true })
  User(
    @Arg('id') id: number,
    @Ctx() { em }: MyContext): Promise<User | null> {
    return em.findOne(User, { id })
  }

  @Mutation(() => User, { nullable: true })
  async updateUser(
    @Arg('id') id: number,
    @Arg('firstName', { nullable: true }) firstName: string,
    @Arg('lastName', { nullable: true }) lastName: string,
    @Arg('address', { nullable: true }) address: string,
    @Arg('postCode', { nullable: true }) postCode: string,
    @Arg('phoneNumber', { nullable: true }) phoneNumber: string,
    @Arg('email', { nullable: true }) email: string,
    @Arg('username', { nullable: true }) username: string,
    @Ctx() { em }: MyContext): Promise<any | null> {
    const user = await em.findOne(User, { id });
    if (!user) {
      return null
    }
    if (typeof firstName !== 'undefined') user.firstName = firstName
    if (typeof lastName !== 'undefined') user.lastName = lastName
    if (typeof address !== 'undefined') user.address = address
    if (typeof postCode !== 'undefined') user.postCode = postCode
    if (typeof phoneNumber !== 'undefined') user.phoneNumber = phoneNumber
    if (typeof email !== 'undefined') user.email = email
    if (typeof username !== 'undefined') user.username = username
    await em.persistAndFlush(user)
    return user
  }

  @Mutation(() => Boolean)
  async deleteUser(
    @Arg('id') id: number,
    @Ctx() { em }: MyContext): Promise<boolean> {
    await em.nativeDelete(User, { id });
    return true
  }

  @Mutation(() => Boolean)
  async deleteUsers(
    @Ctx() { em }: MyContext): Promise<boolean> {
    await em.nativeDelete(User, {});
    return true
  }
}
