import { AggregateRoot } from '@nestjs/cqrs';
import { UserCreatedEvent } from '../events/user-created.events';
import { CreatedUserCommand } from '../command/user-created.command';

export class UserAggregateModel extends AggregateRoot {
  constructor(private readonly command: CreatedUserCommand) {
    super();
}

  createUser() {
    this.apply(new UserCreatedEvent('1', this.command.username));
  }
}
