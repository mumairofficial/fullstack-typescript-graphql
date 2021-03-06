require('dotenv').config();

import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';

import { resolvers, typeDefs } from './graphql';
import { connectDatabase } from './database';

const port = process.env.PORT;

const mount = async (app: Application) => {
  const db = await connectDatabase();
  const apolloServer = new ApolloServer({ resolvers, typeDefs, context: () => ({ db }) });

  apolloServer.applyMiddleware({ app, path: '/api' });

  app.listen(port);

  console.log(`[🚀]: http://localhost:${port}`);
};

mount(express());
