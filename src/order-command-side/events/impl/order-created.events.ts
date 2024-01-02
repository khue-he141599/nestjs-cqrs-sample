// order-created.event.ts
import { IEvent } from '@nestjs/cqrs';
import { IOrder } from 'src/order-command-side/interfaces/order.interface';

export class OrderCreatedEvent implements IEvent {
  constructor(public order:IOrder) {}
}
