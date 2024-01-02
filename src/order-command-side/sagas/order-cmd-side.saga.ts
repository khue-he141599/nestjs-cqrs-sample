// order-saga.ts
import { Injectable } from '@nestjs/common';
import { Saga, ICommand, ofType } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderCreatedEvent } from '../events/impl/order-created.events';
import { CreateOrderCommand } from '../command/impl/order-created.cmd';

@Injectable()
export class OrderSaga {
  @Saga()
  orderCreated = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(OrderCreatedEvent),
      map((event: OrderCreatedEvent) => {
        console.log(`Saga is reacting to OrderCreatedEvent:`, JSON.stringify(event.order));
        // return new CreateOrderCommand(event.order);
        return "OrderSaga"; // thực hiện 1 command khác VD: create user xong thì gửi gmail xác thực
      }),
    );
  };
}
