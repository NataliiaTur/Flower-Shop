import express from 'express';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { loggerPino } from './middlewares/loggerPino.js';
import bouquetsRouter from './routers/flowers.js';
import cors from 'cors';
import { getEnvVar } from './utils/getEnvVar.js';
import { errorHandler } from './middlewares/errorHandler.js';

const PORT = Number(getEnvVar('PORT', 3000));

export const startServer = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());

  app.use(loggerPino);

  app.use(bouquetsRouter);

  app.use((req, res, next) => {
    console.log(`Time: ${new Date().toLocaleString()}`);
    next();
  });

  app.get('/', (req, res) => {
    res.json({
      message: 'Pizdec',
    });
  });

  app.use(notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
};
