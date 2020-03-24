import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 9000;

app.use(bodyParser.json());

app.get('/', (_req, res) => res.send('hello world'));

app.listen(port, () => {
  console.log(`[🚀]: http://localhost:${port}`);
});
