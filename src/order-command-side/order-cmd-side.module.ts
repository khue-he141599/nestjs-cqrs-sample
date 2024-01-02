import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { OrderController } from './order-cmd-side.controller';
import { OrderSaga } from './sagas/order-cmd-side.saga';
import { OrderService } from './service/order.service';
import { CreateOrderHandler } from './command/handler/order-created.cmd.handler';
import { OrderCmdProviders } from './providers/order-cmd.provider';
import { OrderRepository } from './repository/order.repository';
import { CommandDatabasesModule } from '../database/command/cmd-db.module';

@Module({
  imports: [
    CqrsModule, 
    CommandDatabasesModule
  ],
  controllers: [OrderController],
  providers: [
    OrderSaga,
    CreateOrderHandler,
    OrderService,
    OrderRepository,
    ...OrderCmdProviders,
  ],
  // exports: [OrderService],
})
export class OrderCommandSideModule {}
