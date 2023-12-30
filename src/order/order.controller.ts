// order.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { OrderService } from './service/order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(@Body() body: { amount: number; orderId: string }) {
    const { amount } = body;
    return await this.orderService.createOrder(amount);
  }
}
