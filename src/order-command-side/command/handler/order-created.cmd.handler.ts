// create-order.handler.ts
import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { CreateOrderCommand } from '../impl/order-created.cmd';
import { OrderAggregateModel } from '../../models/order-cmd-side-aggregate.model';

@CommandHandler(CreateOrderCommand)
export class CreateOrderHandler implements ICommandHandler<CreateOrderCommand> {
  constructor(private readonly publisher: EventPublisher) {}

  private readonly result: any = {
    msg: 'Create Command Handler Excecuted.',
    err: null,
    data: null,
  };

  async execute(command: CreateOrderCommand) {
    const cmdPublisher = this.publisher.mergeObjectContext(
      new OrderAggregateModel(),
    );
    cmdPublisher.addItem(command.order);
    cmdPublisher.commit();

    this.result.msg = 'Create Command Handler Excecuted.';
  }
}
