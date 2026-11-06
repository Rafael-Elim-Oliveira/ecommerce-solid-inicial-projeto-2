import express from 'express';
import { TYPES } from './container/types';
import { container } from "./container/container";
import { OrderController } from './controllers/OrderController';

const app = express();
app.use(express.json());

const orderController = container.get<OrderController>(TYPES.OrderController);

app.post('/orders', (req, res) => orderController.processOrder(req, res));

export default app;
