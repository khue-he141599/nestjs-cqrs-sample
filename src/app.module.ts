import { Module } from '@nestjs/common';
import { UserCqrsModule } from './order/order.cqrs.module';

@Module({
  imports: [UserCqrsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
