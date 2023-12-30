import { Module } from '@nestjs/common';
import { CommandBus, CqrsModule } from '@nestjs/cqrs';
import { OrderController } from './order.controller';
import { OrderSaga } from './sagas/order.saga';
import { CreateOrderHandler } from './command/handler/order-created.handler';
import { OrderService } from './service/order.service';

@Module({
  imports: [CqrsModule],
  controllers: [OrderController],
  providers: [OrderSaga, CommandBus, CreateOrderHandler, OrderService],
})
export class UserCqrsModule {}
