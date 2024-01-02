import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { IOrder } from '../interfaces/order.interface';

@Injectable()
export class OrderRepository {

    constructor(
        @Inject('Order')
        private readonly repository: Model<IOrder>
    ) { }

    async createEvent(eventModel: any): Promise<any> {
    }
}
    