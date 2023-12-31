import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { OrderQuerySideController } from "./order-query-side.controller";
import { OrderQuerySideService } from "./service/order-query-side.service";


@Module({
    imports: [CqrsModule],
    controllers: [OrderQuerySideController],
    providers: [OrderQuerySideService]
})

export class OrderQuerySideModule {}