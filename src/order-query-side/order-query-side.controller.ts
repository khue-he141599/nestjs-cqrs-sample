import { Controller, Get } from '@nestjs/common';
import { OrderQuerySideService } from './service/order-query-side.service';
import { IOrder } from 'src/order-command-side/interfaces/order.interface';

@Controller('order-query-side')
export class OrderQuerySideController {
  constructor(private readonly orderQuerySideService: OrderQuerySideService) {}

  @Get()
  async getOrder(): Promise<IOrder> {
    return await this.orderQuerySideService.getOrder();
  }
}
