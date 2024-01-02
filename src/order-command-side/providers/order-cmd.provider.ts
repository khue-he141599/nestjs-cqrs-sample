import { Connection } from 'mongoose';
import { OrderSchema } from '../shemas/order.schema';

export const OrderCmdProviders = [
  {
    provide: "Order",
    useFactory: (connection: Connection) => connection.model('Order', OrderSchema),
    inject: ['cqrs-sample'],
  },
];
