import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateOrderCommand } from '../command/impl/order-created.cmd';
import { IOrder } from '../interfaces/order.interface';
import { OrderRepository } from '../repository/order.repository';

@Injectable()
export class OrderService {
  constructor(private readonly commandBus: CommandBus) {}

  // private async executeCommand(body: IOrder) {
  //   let commandObject = new CreateOrderCommand(body);
  //   return await this.commandBus
  //     .execute(commandObject)
  //     .then((response) => {
  //       return response;
  //     })
  //     .catch((error) => {
  //       return error;
  //     });
  // }

  async createOrder(body: IOrder) {
    try {
      let commandObject = new CreateOrderCommand(body);
      return await this.commandBus.execute(commandObject);
    } catch (err) {
      throw new Error(`createOrder error: ${err.message}`);
    }
  }
}
