import { Injectable } from '@nestjs/common';
import { IOrder } from '../../order-command-side/interfaces/order.interface';
import { OrderQueryRepository } from '../repository/order-query.repositpry';

@Injectable()
export class OrderQuerySideService {
  constructor(private readonly orderQueryRepository: OrderQueryRepository) {}

  async getOrder(): Promise<IOrder> {
    try {
      const rs = await this.orderQueryRepository.getOneOrder();
      return rs;
    } catch (err:any) {
        throw new Error(`OrderQuerySideService error: ${err.message}`);
    }
  }
}
 