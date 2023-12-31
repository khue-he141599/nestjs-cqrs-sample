// order-created.event.ts
import { IEvent } from '@nestjs/cqrs';

export class OrderCreatedEvent implements IEvent {
  constructor(public orderId: string, public amount: number) {}
}
