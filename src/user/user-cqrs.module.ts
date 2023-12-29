import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserCreatedEventHandler } from './events/user-created-events.handler';
import { CreateUserHandler } from './command/user-created.handler';
import { UserController } from './user.controller';
import { UserSaga } from './sagas/user.sagas';

@Module({
  imports: [CqrsModule],
  controllers: [UserController],
  providers: [UserCreatedEventHandler, CreateUserHandler, UserSaga],
})
export class UserCqrsModule {}
