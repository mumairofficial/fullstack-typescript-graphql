import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { schema } from './graphql';

const app = express();
const port = 9001;

const apolloServer = new ApolloServer({ schema });
apolloServer.applyMiddleware({ app, path: '/api' });

app.listen(port, () => {
  console.log(`[🚀]: http://localhost:${port}`);
});
