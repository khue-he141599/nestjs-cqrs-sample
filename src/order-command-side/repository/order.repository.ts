import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { IOrder } from '../interfaces/order.interface';

@Injectable()
export class OrderRepository {
  constructor(
    @Inject('Order')
    private readonly repository: Model<IOrder>,
  ) {}

  async saveOrder(body: IOrder) {
    return this.repository.create(body);
  }
}
