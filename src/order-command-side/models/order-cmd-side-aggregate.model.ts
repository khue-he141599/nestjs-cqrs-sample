import { AggregateRoot } from '@nestjs/cqrs';
import { OrderCreatedEvent } from '../events/impl/order-created.events';
import { IOrder } from '../interfaces/order.interface';

export class OrderAggregateModel extends AggregateRoot {
  constructor() {
    super();
  }

  addItem(order: IOrder) {
    this.apply(new OrderCreatedEvent(order));
  }
}
