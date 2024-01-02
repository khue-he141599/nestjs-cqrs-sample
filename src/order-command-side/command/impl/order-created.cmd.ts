// create-order.command.ts
import { ICommand } from '@nestjs/cqrs';
import { IOrder } from 'src/order-command-side/interfaces/order.interface';

export class CreateOrderCommand implements ICommand {
  constructor(public order: IOrder) {}
}
