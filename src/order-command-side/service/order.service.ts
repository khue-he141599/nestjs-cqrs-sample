import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateOrderCommand } from '../command/impl/order-created.cmd';
import { IOrder } from '../interfaces/order.interface';
import { OrderRepository } from '../repository/order.repository';

@Injectable()
export class OrderService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly orderRepository: OrderRepository,
  ) {}

  private async executeCommand(body: IOrder) {
    let commandObject = new CreateOrderCommand(body);
    return await this.commandBus
      .execute(commandObject)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  }

  async createOrder(body: IOrder) {
    try {
      await this.orderRepository.saveOrder(body);
      return await this.executeCommand(body);
    } catch (err) {
      throw new Error(`createOrder error: ${err.message}`);
    }
  }
}
