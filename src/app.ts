import express from 'express';

import productRoute from './Routes/productRouter';

const app = express();

app.use(express.json());

app.use('/products', productRoute);

export default app;
