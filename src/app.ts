import express from 'express';

import productRoute from './Routes/productRouter';
import userRoute from './Routes/UserRouter';
import orderRoute from './Routes/OrderRouter';

const app = express();

app.use(express.json());

app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/orders', orderRoute);

export default app;
