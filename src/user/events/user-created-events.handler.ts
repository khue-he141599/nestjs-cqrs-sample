import { IEventHandler } from "@nestjs/cqrs";
import { UserCreatedEvent } from "./user-created.events";

export class UserCreatedEventHandler implements IEventHandler<UserCreatedEvent> {
    handle(event: UserCreatedEvent) {
        console.log(`User ${event.username} created with ID ${event.userId}`);
    }
}   