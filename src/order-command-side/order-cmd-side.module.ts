import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { OrderController } from './order-cmd-side.controller';
import { OrderSaga } from './sagas/order-cmd-side.saga';
import { OrderService } from './service/order.service';
import { CreateOrderHandler } from './command/handler/order-created.cmd.handler';

@Module({
  imports: [CqrsModule],
  controllers: [OrderController],
  providers: [OrderSaga, CreateOrderHandler, OrderService],
})
export class UserCommandSideModule {}
