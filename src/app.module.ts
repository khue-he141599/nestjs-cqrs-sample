import { Module } from '@nestjs/common';
import { OrderCommandSideModule } from './order-command-side/order-cmd-side.module';
import { OrderQuerySideModule } from './order-query-side/order-query-side.module';

@Module({
  imports: [OrderCommandSideModule, OrderQuerySideModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
