import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { OrderQuerySideController } from "./order-query-side.controller";
import { OrderQuerySideService } from "./service/order-query-side.service";
import { CommandDatabasesModule } from "../database/command/cmd-db.module";
import { QueryProviders } from "./providers/query.provider";


@Module({
    imports: [CommandDatabasesModule],
    controllers: [OrderQuerySideController],
    providers: [OrderQuerySideService, ...QueryProviders]
})
    
export class OrderQuerySideModule {}