import express from 'express';
import cookieParser from 'cookie-parser';

import { mountRouter } from './routes/index.js';
import { useLogger } from './utils/logger.js';
import { errorHandlerMiddleware } from './middlewares/index.js';
import cors from 'cors';

const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
useLogger(app);
app.use(express.json());
app.use(cookieParser());

mountRouter(app);

app.use(errorHandlerMiddleware);

export { app };
