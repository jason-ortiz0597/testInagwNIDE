import express from 'express';
import morgan from 'morgan';
import indexRoute from './routes/indexRoutes.js';
import productRoute from './routes/productRoutes.js';
import customerRoute from './routes/customerRoutes.js';

import cors from 'cors';


const app = express();


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('uploads'));



app.use(indexRoute);
app.use(productRoute);
app.use(customerRoute);

export default app;