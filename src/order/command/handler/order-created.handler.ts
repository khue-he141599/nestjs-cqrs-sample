// create-order.handler.ts
import {
  CommandHandler,
  ICommandHandler,
  EventPublisher,
} from '@nestjs/cqrs';
import { CreateOrderCommand } from '../impl/order-created.command';
import { OrderAggregateModel } from '../../models/order-model-aggregate.model';

@CommandHandler(CreateOrderCommand)
export class CreateOrderHandler implements ICommandHandler<CreateOrderCommand> {
  constructor(private readonly publisher: EventPublisher) {}

  async execute(command: CreateOrderCommand) {
    const cmdPublisher = this.publisher.mergeObjectContext(new OrderAggregateModel());
    cmdPublisher.addItem(command.orderId, command.amount);
    cmdPublisher.commit();
  }
}
