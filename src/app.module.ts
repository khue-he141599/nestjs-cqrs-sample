import { Module } from '@nestjs/common';
import { OrderCommandSideModule } from './order-command-side/order-cmd-side.module';

@Module({
  imports: [OrderCommandSideModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
