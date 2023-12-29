import { Module } from '@nestjs/common';
import { UserCqrsModule } from './user/user-cqrs.module';

@Module({
  imports: [UserCqrsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
