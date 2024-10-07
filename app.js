import express from 'express';
import { config } from './config/index.js';
import meteorsController from './delivery/meteorsController.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use(meteorsController);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
