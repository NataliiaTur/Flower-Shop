import express from 'express';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { loggerPino } from './middlewares/loggerPino.js';

const PORT = 3000;

const app = express();

app.use(loggerPino);

app.use((req, res, next) => {
  console.log(`Time: ${new Date().toLocaleString()}`);
  next();
});

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Pizdec',
  });
});

app.use(notFoundHandler);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
