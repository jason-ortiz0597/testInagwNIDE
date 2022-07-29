import express from 'express';
import morgan from 'morgan';
import indexRoute from './routes/indexRoutes.js';
import productRoute from './routes/productRoutes.js';
import cors from 'cors';

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(indexRoute);
app.use(productRoute);

export default app;