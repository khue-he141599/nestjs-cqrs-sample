import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { UserCreatedEvent } from '../events/user-created.events';
import { CreatedUserCommand } from './user-created.command';
import { UserAggregateModel } from '../model/user-model-aggregate.model';

@CommandHandler(CreatedUserCommand)
export class CreateUserHandler implements ICommandHandler<CreatedUserCommand> {
  constructor(private readonly publisher: EventPublisher) {}

  async execute(command: CreatedUserCommand): Promise<any> {
    const aggregateModel = new UserAggregateModel(new CreatedUserCommand(command.username));
    const event = this.publisher.mergeObjectContext(aggregateModel);
    event.createUser();
    event.commit();
  }
}
