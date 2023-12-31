import { IEventHandler } from "@nestjs/cqrs";
import { OrderCreatedEvent } from "../impl/order-created.events";

export class OrderCreatedEventHandler implements IEventHandler<OrderCreatedEvent> {
    handle(event: OrderCreatedEvent) {
        console.log(`Order ${event.orderId} created with ID ${event.amount}`);
    }
}   