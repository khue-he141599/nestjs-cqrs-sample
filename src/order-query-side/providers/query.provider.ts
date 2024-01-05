import { Connection } from 'mongoose';
import { OrderSchema } from '../../order-command-side/shemas/order.schema';

export const QueryProviders = [
    {
        provide: "Order",
        useFactory: (connection: Connection) => connection.model('Order', OrderSchema),
        inject: ['cqrs-sample'],
      },
];
    