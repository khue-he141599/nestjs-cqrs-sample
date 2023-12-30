import { AggregateRoot } from '@nestjs/cqrs';
import { OrderCreatedEvent } from '../events/impl/order-created.events';

export class OrderAggregateModel extends AggregateRoot {
  constructor() {
    super();
  }

  addItem(orderId: string, amount: number) {
    this.apply(new OrderCreatedEvent(orderId, amount));
  }
}
