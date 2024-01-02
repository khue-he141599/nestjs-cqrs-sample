// order.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { OrderService } from './service/order.service';
import { IOrder } from './interfaces/order.interface';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(@Body() body: IOrder) {
    return await this.orderService.createOrder(body);
  }
}
