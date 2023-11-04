import express from 'express';
import cookieParser from 'cookie-parser';

import { mountRouter } from './routes/index.js';
import { useLogger } from './utils/logger.js';
import { errorHandlerMiddleware } from './middlewares/error-handler.middleware.js';

const app = express();

useLogger(app);
app.use(express.json());
app.use(cookieParser());

mountRouter(app);

app.use(errorHandlerMiddleware);

export { app };
