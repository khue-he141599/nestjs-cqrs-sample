import { IEventHandler } from "@nestjs/cqrs";
import { OrderCreatedEvent } from "../impl/order-created.events";

export class OrderCreatedEventHandler implements IEventHandler<OrderCreatedEvent> {
    handle(event: OrderCreatedEvent) {
        console.log(`Create Order with body: `, JSON.stringify(event.order));
    }
}   