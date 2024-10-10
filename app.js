import express from 'express';
import { config } from './config/index.js';
import meteorsController from './delivery/meteorsController.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use(meteorsController);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
