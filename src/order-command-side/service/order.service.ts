import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { uuid } from 'uuidv4';
import { CreateOrderCommand } from '../command/impl/order-created.cmd';

@Injectable()
export class OrderService {
  constructor(private readonly commandBus: CommandBus) {}

  private async executeCommand(amount: number, orderId: string) {
    let commandObject = new CreateOrderCommand(amount, orderId);
    return await this.commandBus
      .execute(commandObject)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  }

  async createOrder(amount: number) {
    let orderId = uuid();
    return await this.executeCommand(amount, orderId);
  }
}
