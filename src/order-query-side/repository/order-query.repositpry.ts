import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IOrder } from '../../order-command-side/interfaces/order.interface';

@Injectable()
export class OrderQueryRepository {
  constructor(
    @Inject('Order')
    private readonly readModel: Model<IOrder>,
  ) {}

  async getOneOrder() {
    return await this.readModel.findOne();
  }
}
