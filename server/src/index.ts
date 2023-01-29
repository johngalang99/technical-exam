import 'reflect-metadata';

import { MikroORM } from '@mikro-orm/core';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';

import microConfig from './mikro-orm.config';
import { UserResolver } from './resolvers/user';

const main = async () => {
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up()

  const app = express()

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false
    }),
    context: () => ({ em: orm.em })
  });
  await apolloServer.start()
  apolloServer.applyMiddleware({ app })

  app.listen(4001, () => {
    console.log('server started on localhost:4000')
  })

};

main().catch((err) => console.log(err));
